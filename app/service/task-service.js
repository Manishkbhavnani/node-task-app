// Module Import
const Joi = require('joi');
const Task = require('../models/task-model');
var ObjectID = require('mongodb').ObjectID;


// Add Task
exports.addTask = async (data, user) => {
  return new Promise((resolve, reject) => {
    try {
      const schema = Joi.object().keys({
        task_name: Joi.string().required(),
        task_description: Joi.string().required(),
        from: Joi.string().required(),
        to: Joi.string().required()
        
      });
      
      Joi.validate(data, schema, (err, value) => {
        if (err) {
          reject({
            status: 422,
            message: 'Invalid request data'
          });
        } else {
          const newTask = new Task(data);
          newTask.save().then((Task, err) => {
            if (err) {
              reject({
                status: 422,
                message: 'Invalid request data'
              });
            }
            resolve({
              status: 200,
              data: Task,
              message: "Task  Added",
              success: true
            });
          });
        }
      });

    } catch (e) {
      console.log(e)
      reject({
        status: 400,
        message: "Task Not  Added ",
        success: false,
        error: e
      });
    }
  });
};

// Update Task
exports.updateTask = async (req, res) => {
  return new Promise((resolve, reject) => {
    const update = req
    Task.findOneAndUpdate({ _id: req.Task },
      update
      ,
      { new: true }

    ).then((user, err) => {
      if (err) {
        reject(err)
      } else {
        if (user) {
          resolve({ status: 200, message: 'Task Updated', success: true, data: user })
        } else {

          resolve({ status: 200, message: 'Task Updated not found', success: false })
        }
      }
    });
  });
}

// Delte Task
exports.taskDelete = async (req, res) => {
  return new Promise((resolve, reject) => {
    const update = req
    Task.findByIdAndDelete({ _id: req.Task }).then((task, err) => {
      if (err) {
        reject(err)
      } else {
        if (task) {
          resolve({ status: 200, message: 'Task Deleted', success: true, })
        } else {

          resolve({ status: 200, message: 'Task deleted not found', success: false })
        }
      }
    });
  });
}



// Task List & View For Edit
exports.listTask = async (req, res) => {

  return new Promise((resolve, reject) => {
    try {
      let filter = {}
      if (req.Task) {
        filter['_id'] = ObjectID(req.Task)
      }

      Task.aggregate([
        {
          '$match': filter
        }
      ]).then((user) => {
        if (user && user.length) {
          resolve({ status: 200, message: 'Task  found', success: true, data: user })
        } else {

          resolve({ status: 200, message: 'Task not found', success: true })
        }
      });
    } catch (e) {
      reject({
        status: 400,
        message: "Something went wrong",
        success: false,
        error: e
      });
    }
  });
}






