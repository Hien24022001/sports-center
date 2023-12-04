const courseModel = require('../models/courseModel.js')

const getCourses = async (req, res, next) => {
    try {
        const { point, type } = req.query;
        let courses = await courseModel.getAllCourseByAVGPoint({ point, type });
        return res.json(courses)
    } catch (error) {
        return next(createError(400))
    }
}

// const addUser = async (req, res, next) => {
//     try {
//         const data = await userModel.addUser(req.body);
//         console.log('data', data);
//         return res.json('ok')
//     } catch(error) {
//         console.log('error', error)
//     }
// }

// const updateUser = async (req, res, next) => {
//     try {
//         const { id, password } = req.body;
//         await userModel.updateUser({ id, password });
//         return res.json('ok')
//     } catch(error) {
//         console.log('error', error)
//     }
// }

// const deleteUser = async (req, res, next) => {
//     try {
//         const { id } = req.body;
//         await userModel.deleteUser(id);
//     } catch(error) {
        
//     }
// }

module.exports = {
    getCourses
}