const express = require('express');
const { getAllUsers, addUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();
// const adminController = require("../controllers/adminController");

router.get('/', getAllUsers);
router.post('/', addUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;

