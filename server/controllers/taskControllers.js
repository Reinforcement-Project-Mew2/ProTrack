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
  const { project_id } = req.body;
  User.find({ _id: project_id }, (err, project) => {
    if (err) return next(createErr(err));
    res.locals.tasks = project.tasks;
    return next();
  })
}

taskController.createTask = (req, res, next) => {
  const { project_id, task_id, task_name, task_created_by, task_members, task_content, task_start_date, task_end_date } = req.body;
  Project.findByIdAndUpdate({
    _id: project_id,
    task: [
    {
      task_id: task_id,
      task_name: task_name,
      task_created_by: task_created_by,
      task_members: task_members,
      task_content: task_content,
      task_start_date: task_start_date,
      task_end_date: task_end_date
    },
    ]
  })
  .then(data => {
  res.locals.task = data;
  next();
  })
  .catch(err => {
      next(createErr(err))
  })
};

taskController.updateTask = (req, res, next) => {
  const { project_id, task_name, task_created_by, task_members, task_content, task_start_date, task_end_date } = req.body;
  const { task_id } = req.params;
  Project.findByIdAndUpdate({
    _id: project_id,
    task: [
    {
      task_id: task_id,
      task_name: task_name,
      task_created_by: task_created_by,
      task_members: task_members,
      task_content: task_content,
      task_start_date: task_start_date,
      task_end_date: task_end_date
    },
    ]
  })
  .then(data => {
  res.locals.task = data;
  next();
  })
  .catch(err => {
      next(createErr(err))
  })
};

taskController.deleteTask = (req, res, next) => {
  const { project_id, task_id } = req.body;
  Project.findByIdAndDelete({ _id: project_id, task: { task_id: task_id } })
  .then(data => {
  res.locals.deletedTask = data;
  next();
  })
  .catch(err => {
      next(createErr(err))
  })
}


module.exports = taskController;