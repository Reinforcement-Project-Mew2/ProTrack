// const { models } = require('mongoose');
const User = require('../models/userModel');
const Project = require('../models/projectModel');

const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `taskController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in taskController.${method}. Check server logs for more details.` }
    };
};

const taskController = {};
  
taskController.getTasks = (req, res, next) => {

}

taskController.createTask = (req, res, next) => {

}

taskController.updateTask = (req, res, next) => {

}

taskController.deleteTask = (req, res, next) => {

}


module.exports = taskController;