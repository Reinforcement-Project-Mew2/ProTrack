const { models } = require('mongoose');
const User = require('../models/userModel');

const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `authenticationController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in authenticationController.${method}. Check server logs for more details.` }
    };
};

const authenticationController = {};



module.exports = authenticationController;