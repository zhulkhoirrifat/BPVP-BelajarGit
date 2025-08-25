import * as userService from "../services/user.service.js";

export const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found"});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        req.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        res.json({ message: "User deleted"})
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}