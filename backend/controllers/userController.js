const userModel = require('../models/userModel.js')

const getAllUsers = async (req, res, next) => {
    try {
        let allEmployee = await userModel.getAllUsers();
        return res.json(allEmployee)
    } catch (error) {
        return next(createError(400))
    }
}

const addUser = async (req, res, next) => {
    try {
        const data = await userModel.addUser(req.body);
        console.log('data', data);
        return res.json('ok')
    } catch(error) {
        console.log('error', error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id, password } = req.body;
        await userModel.updateUser({ id, password });
        return res.json('ok')
    } catch(error) {
        console.log('error', error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.body;
        await userModel.deleteUser(id);
    } catch(error) {
        
    }
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
}