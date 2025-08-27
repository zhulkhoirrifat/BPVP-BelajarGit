const { response } = require("express")
const { prisma } = require("../config/utils")
const { getCurrentUser } = require("../config/libs")

const createCategory = async (request, response) => {
    let { name, description } = request.body
    const user = await getCurrentUser(request.user)

    try{
        let categories = await prisma.Category.create({
            data: {
                name,
                description,
                userId: user.id
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
            message: err.message || err,
            status: "error"
        })
    }
}

const readCategory = async (request, response) => {
    try {
        let allCategory = await prisma.Category.findMany();
        response.json({
            data: allCategory,
            message: "All category fetched successfully",
            status: "success"
        });
        return;
    } catch (err) {
        response.json({
            data: null,
            message: err.message || err,
            status: "error"
        });
    }
}

const readCategoryById = async (request, response) => {
    try {
        let { id } = request.params;
        let uniqCategory = await prisma.Category.findUnique({
            where: { id: Number(id) }
        });
        if (!uniqCategory) {
            return response.status(404).json({
                data: null,
                message: "Category not found",
                status: "error"
            });
        }
        response.json({
            data: uniqCategory,
            message: "Category fetched successfully",
            status: "success"
        });
        return;
    } catch (err) {
        response.json({
            data: null,
            message: err.message || err,
            status: "error"
        })
    }
}

const updateCategory = async (request, response) => {
    try {
        let { id } = request.params;
        let { name, description } = request.body;

        let updateCategory = await prisma.Category.update({
            where: { id: Number(id) },
            data: { 
                name,
                description
            }
        });
        response.json({
            data: updateCategory,
            message: "Category updated successfully",
            status: "success"
        });
        return;
    } catch (err) {
        response.json({
            data: null,
            message: err.message || err,
            status: "error"
        });
    }
}

const deleteCategory = async (request, response) => {
    try {
        let { id } = request.params;

        let deleteCategory = await prisma.Category.delete({
            where: { id: Number(id) }
        });
        response.json({
            data: deleteCategory,
            message: "Category deleted sucessfully",
            status: "success"
        });
        return;
    } catch (err) {
        response.json({
            data: null,
            message: err.message || err,
            status: "error"
        });
    }
}

module.exports = { createCategory, readCategory, readCategoryById, updateCategory, deleteCategory }