const express = require('express');
const router = express.Router();
// const adminController = require("../controllers/adminController");

router.get('/', () => console.log('hello'));

module.exports = router;

