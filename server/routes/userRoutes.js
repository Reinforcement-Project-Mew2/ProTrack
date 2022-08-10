require('dotenv').config();
const express = require('express');
const userController = require('../controllers/userControllers');
const router = express.Router();

const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

router.get('/', (req, res) => {
    console.log('In userRoute')
})
 
router.use(passport.initialize());

passport.use(
  new GitHubStrategy(
    {
        clientID: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        callbackURL: "http://localhost:3000/user/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
        cb(null, profile);
        // MongoDB
        // User.findOrCreate({ githubId: profile.id }, function (err, user) {
        //     return cb(err, user);
        // });
    }
  )
);

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  }
);


//   userController.oauthLogin


router.get('/', userController.verifyUser, (req, res) => {
    return res.status(200).json(res.locals.user);
});

router.post('/', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.user);
});

// router.post('/', userController.updateUser, (req, res) => {
//     return res.status(200).json(res.locals.updatedUser);
// });

// router.delete('/', userController.deleteUser, (req, res) => {
//     return res.status(200).json(res.locals.deleteUser);
// });


module.exports = router;