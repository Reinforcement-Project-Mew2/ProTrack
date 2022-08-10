// const { models } = require('mongoose');
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
    const { username, password, first_name, last_name, email, user_id } = req.body;
    User.create({
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
    })
    .then(data => {
    res.locals.user = data;
    next();
    })
    .catch(err => {
        next(createErr(err))
    })
};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({username, password}, (err, user) => {
        if (err) return next(createErr(err));
        if(user === undefined){
            res.redirect('/signup');
        } else {
        res.locals.user = user;
        return next();
        }
    })
};


module.exports = userController;