const Session = require('../models/sessionModel');

/**
 ** setCookie: 
 *  What: setting cookie for testing
 *  When: User first land on the page '/'
 ** setSSIDCookie
 *  What: Cookie of a user's ID for validation 
 *  When: User signup or login
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
 ** startSession 
 *  What: Create a new session
 *  When: User login
 ** isLoggedIn 
 *  What: Search DB for the appropriate(valid) session that matches
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