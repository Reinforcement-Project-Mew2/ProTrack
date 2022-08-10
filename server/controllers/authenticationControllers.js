// const { models } = require('mongoose');
const User = require('../models/userModel');
const Session = require('../models/sessionModel');

const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `authenticationController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in authenticationController.${method}. Check server logs for more details.` }
    };
};

/**
 ** setCookie: 
 *  What: setting cookie for testing
 *  When: user first land on the page '/'
 ** setSSIDCookie
 *  What: cookie of a user's ID for validation 
 *  When: user signup or login
 */ 
const cookieController = {
  setCookie: (req, res, next) => {
    console.log('COOKIE CREATED!');
    res.cookie('cookie_name', 'cookie_val');
    return next();
  },
  setSSIDCookie: (req, res, next) => {
    const id = res.locals.id;
    res.cookie('ssid', id, { httpOnly: true });
    return next(); 
  },
};


/**
 * * Additional Cookie Setup 
 *    1) Identify recurring user on a site without needing to log in (should expire) 
 *    2) Maintain user setting information without login needed
 */


/**
 ** startSession 
 *  What: create a new session
 *  When: user login
 ** isLoggedIn 
 *  What: search DB for the appropriate(valid) session that matches
 *  When: 
 */ 
const sessionController = {
  startSession: (req, res, next) => {
    console.log('(SC - startSession) RES LOCAL USER:', res.locals.user);
    Session.create({ cookieId: res.locals.user._id.id }, 
      (err, session) => {
        console.log('Error in sessionController.startSession:', err);
        if (err) return next('Error in sessionController.startSession: ' + JSON.stringify(err));
        else return next();
      }
    )
  },
  isLoggedIn: (req, res, next) => {
    console.log('(SC - isLoggedIn) RES LOCALS USER:', res.locals.user)
    Session.findOne({ cookieId: res.cookies.ssid }, 
      (err, session) => {
        if (err) return next('Error in sessionController.isLoggedIn: ' + JSON.stringify(err));
        else return next();
      }
    )
  },
};

module.exports = { cookieController, sessionController };