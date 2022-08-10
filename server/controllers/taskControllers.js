const { models } = require('mongoose');
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
  // const { username, password } = req.body;
  // User.findOne({username, password}, (err, user) => {
  //     if (err) return next(createErr(err));
  //     if(user === undefined){
  //         res.redirect('/signup');
  //     } else {
  //     res.locals.user = user;
  //     return next();
  //     }
  // })
}

// taskController.createTask = (req, res, next) => {
//   const { project_id, task_id, task_name, task_created_by, task_members, task_content, task_start_date, task_end_date } = req.body;
//   Project.insert({
//     _id: project_id,
//     task: [
//     {
//       task_id: task_id,
//       task_name: task_name,
//       task_created_by: task_created_by,
//       task_members: task_members,
//       task_content: task_content,
//       task_start_date: task_start_date,
//       task_end_date: task_end_date
//     },
//     ]
//   })
//   .then(data => {
//   res.locals.task = data;
//   next();
//   })
//   .catch(err => {
//       next(createErr(err))
//   })
// };

// taskController.updateTask = (req, res, next) => {
//   const { project_id, task_id, task_name, task_created_by, task_members, task_content, task_start_date, task_end_date } = req.body;
//   Project.updateOne({
//     _id: project_id,
//     task: [
//     {
//       task_id: task_id,
//       task_name: task_name,
//       task_created_by: task_created_by,
//       task_members: task_members,
//       task_content: task_content,
//       task_start_date: task_start_date,
//       task_end_date: task_end_date
//     },
//     ]
//   })
//   .then(data => {
//   res.locals.task = data;
//   next();
//   })
//   .catch(err => {
//       next(createErr(err))
//   })
// };

taskController.deleteTask = (req, res, next) => {

}


module.exports = taskController;