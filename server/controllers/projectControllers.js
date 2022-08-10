// const { models } = require('mongoose');
const User = require('../models/userModel');
const Project = require('../models/projectModel');

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return { 
    log: `projectController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in projectController.${method}. Check server logs for more details.` }
  };
};


const projectController = {};

projectController.getProjects = (req, res, next) => {
 
}

projectController.createProject = (req, res, next) => {
  const { } = req.body;
}

projectController.updateProject = (req, res, next) => {

}

projectController.deleteProject = (req, res, next) => {

}


module.exports = projectController;