// const { models } = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {};

const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `userController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in userController.${method}. Check server logs for more details.` }
    };
};

userController.createUser = (req, res, next) => {
    const { username, password, first_name, last_name, email, user_id } = req.body;

    User.findOne({ username }, (err, user) => {
        if (err) return next(createErr(err));
        if (user) return next('User already exists')
        else {
            User.create({
                username: username,
                password: password_hashed,
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
        }
    })
};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) return next(createErr(err));
        if (user === undefined) res.redirect('/signup');
        else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) console.log('ERR in bcrypting userController.verifyUser');
                if (result) {
                    res.locals.user = user;
                    return next();
                }
                return next();
            })
        }
    })
};

userController.oauthLogin = (req, res, next) => {
    // 12:34
    console.log('query', query);
};

module.exports = userController;