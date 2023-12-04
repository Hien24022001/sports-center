const express = require('express');
const { getMaintainList } = require('../controllers/maintainController');
const router = express.Router();

router.get('/', getMaintainList);

module.exports = router;

