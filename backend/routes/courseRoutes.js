const express = require('express');
const { getCourses } = require('../controllers/courseController');
const router = express.Router();

router.get('/', getCourses);
// router.post('/', addUser);
// router.put('/', updateUser);
// router.delete('/', deleteUser);

module.exports = router;

