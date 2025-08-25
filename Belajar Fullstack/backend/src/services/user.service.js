import prisma from "../config/database.js";

export const getAllUsers = async () => {
    return await prisma.User.findMany();
}

export const getUserById = async () => {
    return await prisma.User.findUnique({ where: { id: Number(id) } });
}

export const createUser = async () => {
    return await prisma.User.create({ data });
}

export const updateUser = async () => {
    return await prisma.User.update({
        where: { id: Number(id) },
        data
    });
}

export const deleteUser =async () => {
    return await prisma.User.delete({ where: { id: Number(id) } });
}