import prisma from "../config/database.js";

export const getAllUsers = async (page = 1, limit = 10) => {
    return await prisma.User.findMany({
        skip: (page - 1) * limit,
        take: limit,
    });
}

export const getUserById = async (id) => {
    return await prisma.User.findUnique({ where: { id: Number(id) } });
}

export const createUser = async (data) => {
    return await prisma.User.create({ data });
}

export const updateUser = async (id, data) => {
    return await prisma.User.update({
        where: { id: Number(id) },
        data
    });
}

export const deleteUser =async (id) => {
    return await prisma.User.delete({ where: { id: Number(id) } });
}