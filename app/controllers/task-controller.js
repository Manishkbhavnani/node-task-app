const taskService = require('../service/task-service');

/**
 * @author : Manish Bhavnani
 */

// Task Add Controller  
exports.taskAdd = async (req, res) => { 
    try {

        var task = await taskService.addTask(req.body,req.user);
        return res.status(200).json({ status: 200, data: task });
    } catch(e) {
        return res.status(400).json(e);
    }
}

// Task Edit Controller  
exports.taskEdit= async (req, res) => { 
    try {

        var task = await taskService.updateTask(req.body);
        return res.status(200).json({ status: 200, data: task });
    } catch(e) {
        return res.status(400).json(e);
    }
}


// Task Delete Controller  
exports.taskDelete= async (req, res) => { 
    try {

        var task = await taskService.taskDelete(req.body);
        return res.status(200).json({ status: 200, data: task });
    } catch(e) {
        return res.status(400).json(e);
    }
}



// Task List Controller  
exports.listTask = async (req, res) => { 
    try {

        var task = await taskService.listTask(req.body);
        return res.status(200).json({ status: 200, data: task });
    } catch(e) {
        return res.status(400).json(e);
    }
}
