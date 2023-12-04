const maintainModel = require('../models/maintainModel.js')

const getMaintainList = async (req, res, next) => {
    try {
        let list = await maintainModel.getMaintainList();
        return res.json(list)
    } catch (error) {
        console.log('err', error)
    }
}

module.exports = {
    getMaintainList
}