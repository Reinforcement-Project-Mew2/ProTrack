const { models } = require('mongoose');
const User = require('../models/userModel');

const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `userController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in userController.${method}. Check server logs for more details.` }
    };
};

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  User.create({
      username: username,
      password: password
  })
  .then(data => {
  res.locals.user = data._id;
  next();
  })
  .catch(err => {
      next({
          log: `userController error : ERROR: ${err}`,
          message: { err: 'Error occured is userController'}
      })
  })
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  User.find({username, password}, (err, user) => {
      if (err) return next('Error in userController.verifyUser: ' + JSON.stringify(err));
      if(user[0] === undefined){
          res.redirect('/signup');
      } else {
      res.locals.user = user._id;
      return next();
      }
  })
};




module.exports = userController;