const { request } = require("express");
const { prisma } = require("../config/utils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const register = async(request, response) => {
    let { email, name, password } = request.body;
    console.log("Body:", request.body)

    const user = await prisma.User.findUnique({
        where: {
            email
        }
    })
    if (user) {
        response.json({
            data: null,
            message: "Email has been taken",
            status: "exist"
        })
    } else {
        
        const hashedPassword = await bcrypt.hash(password, 12)

        try {
            const newUser = await prisma.user.create({
              data: {
                email,
                password: hashedPassword,
                name
              }
            });
        
            response.json({
                data: null,
                message: "User successfully registered",
                status: "registered"
            });
        } catch (err) {
            console.error('Register error:', err);
            response.json({
                data: null,
                message: err,
                status: "error"
            })
        }
    }
}

const login = async (request, response) => {
    const { email, password} = request.body;

    const user = await prisma.User.findUnique({
        where: {
            email
        }
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        response.json({
            data: null,
            message: "Wrong email or password",
            status: "invalid"
        })
    }

    const accessToken = jwt.sign({ email }, process.env.JWT_SECRET)
    response.json({ accessToken })
}

module.exports = { register, login }