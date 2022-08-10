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
    const { username, password, first_name, last_name, email } = req.body;
    User.create({
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
    })
    .then(data => {
    res.locals.user = data.user_id;
    next();
    })
    .catch(err => {
        next(createErr(err))
    })
};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    User.find({username, password}, (err, user) => {
        if (err) return next(createErr(err));
        if(user[0] === undefined){
            res.redirect('/signup');
        } else {
        res.locals.user = user._id;
        return next();
        }
    })
};


module.exports = userController;