const { prisma } = require("../config/utils")

const createCategory = async (request, response) => {
    let { name, description } = request.body

    try{
        let categories = await prisma.Category.create({
            data: {
                name,
                description
            }
        })
        response.json({
            data: categories,
            message: "Category was successfully created",
            status: "success"
        })
        return;
    } catch(err){
        response.json({
            data: null,
            message: err,
            status: "error"
        })
    }
}

module.exports = { createCategory }