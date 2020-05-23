const userService = require('../service/user-service');

/**
 * @author : Manish Bhavnani
 */

// Task Add Controller  
exports.userAdd = async (req, res) => { 
    try {

        var task = await userService.addUser(req.body);
        return res.status(200).json({ status: 200, data: task });
    } catch(e) {
        return res.status(400).json(e);
    }
}

exports.levelUser = async (req, res) => { 
    try {

        var task = await userService.levelUser(req.body);
        return res.status(200).json({ status: 200, data: task });
    } catch(e) {
        return res.status(400).json(e);
    }
}





