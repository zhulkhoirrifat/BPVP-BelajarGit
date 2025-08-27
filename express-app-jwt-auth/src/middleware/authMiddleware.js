const { request, response } = require("express");
const jwt = require("jsonwebtoken")

const authenticateJwt = (request, response, next) => {
    const authHeader = request.header("Authorization")
    if(!authHeader){
        return response.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1]
    
    if (!token) {
        return response.status(401).json({ message: "Invalid token format" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return response.status(403).json({ message: "Invalid or expired token" });
        } 
        request.user = user; 
        next();
    });
}

module.exports = authenticateJwt