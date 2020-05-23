// Module Import
const Joi = require('joi');
const User = require('../models/user-model');
var ObjectID = require('mongodb').ObjectID;


// Add User
exports.addUser = async (data) => {
  return new Promise((resolve, reject) => {
    try {
      
      for (var addUser = 0; addUser < 500; addUser++) {
        data = {
          'name' : makename(6),
          'age' : age(),
          'level' : level()
        }
        console.log(data)
        const newUser = new User(data);
        newUser.save().then((User, err) => {
          if (err) {
            reject({
              status: 422,
              message: 'Invalid request data'
            });
          }
        });

        resolve({
          status: 200,
          data: User,
          message: "User  Added",
          success: true
        });
      }




    } catch (e) {
      console.log(e)
      reject({
        status: 400,
        message: "User Not  Added ",
        success: false,
        error: e
      });
    }
  });
};


exports.makeRank = async (data) => {


}

function makename(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


function age(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function age() {
  var result           = '';
  var characters       = '0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 2; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


function level() {
  var result           = '';
  var characters       = '0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 1; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}







// Add User
exports.levelUser = async (data) => {
  return new Promise((resolve, reject) => {
    try {
      
  return new Promise((resolve, reject) => {
    try {
 
      User.aggregate([
        { "$sort": { "level": -1 } },
      ]).then((user) => {
        if (user && user.length) {
          resolve({ status: 200, message: 'User  found', success: true, data: user })
        } else {

          resolve({ status: 200, message: 'User not found', success: true })
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
    




    } catch (e) {
      console.log(e)
      reject({
        status: 400,
        message: "User Not  Added ",
        success: false,
        error: e
      });
    }
  });
};