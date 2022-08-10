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
  //request is a array of users project ids
  const { userProjectIds } = req.body
  //find all matching ids and return them
  Project.find( { '_id': { $in: usersProjectIds}}, (err,projectList) => {
    if(err) return next(createErr(err));
    res.locals.projectData = projectList;
    return next();
  })
}

projectController.createProject = (req, res, next) => {
  const { project_name, project_created_by, project_members, project_description, project_start_date, project_end_date } = req.body;
  
  Project.create({project_name,project_created_by, project_members, 
    project_description, project_start_date, project_end_date})
  .then(data => {
    res.locals.newProject = data._id;
    next();
  })
  .catch(err => {
    next(createErr(err));
  })
};

projectController.updateProject = (req, res, next) => {
  const { _id, changes } = req.body;
  const filterRequest = { _id };
  Project.findOneAndUpdate(filterRequest, { changes })
}

projectController.deleteProject = (req, res, next) => {
  const { _id } = req.body;
  const deleteId = { _id };
  Project.deleteOne(deleteId)
  .then(deletedDocument => {
    res.locals.projectData = deletedDocument;
    next();
  })
  .catch( err => {
    next(createErr(err));
  })
}


module.exports = projectController;