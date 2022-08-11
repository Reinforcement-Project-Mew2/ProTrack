const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require("cors");
var csrf = require('csurf')

const app = express();
const PORT = 3000;

const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const { cookieController, sessionController } = require('./controllers/authenticationControllers');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/src', express.static(path.resolve(__dirname, '../src')));
// app.use(csrf({ cookie: true }));
app.use(cookieParser());

// Create a new Project 
// app.get('/', cookieController.setCookie, (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../index.html'))
// });
 
app.use("/project", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/user", userRoutes);


/**
 * *  Option 1) Creates a new user (Signup)
      Request:  POST
      From:     Sign Up Page (Signup.tsx)
      To:       '/user/signup' -> (Create User) -> (Redirect to Login Page) or (Session + Logged In)
      Body:     username, first_name, last_name, password, email, (created_on)
  
 * *  Option 2) OAuth to create an account
       1) Register the app with OAuth API Provider
       2) Send to the OAuth provider authorization endpoint to obtain an authorization code
      Body:     scope, redirect_uri, client_id 
      To:       'https://github.com/login/oauth/authorize?' + ...

       3) After receiving authorization code, combine it with "client_id" and "client_secret" to send OAuth(GitHub) to authenticate and generate a token
      To:       'https://github.com/login/oauth/access_token?' + ... 

       4) Access token returned from the OAuth provider grants the access to the scope of the requested API
      To:       'https://api.github.com/user'
      Request:  API URL, Header with access token
 */

      
/**
 * *  Option 1) User requesting access (Login)
      Request:  POST
      From:     Login Page (Login.tsx)
      To:       '/user/login' -> (Verify User) -> (Create & Store Session ID in DB) -> (Logged In)
      Body:     username, password
 
 *  *  Option 2) OAuth to login
        1) Client Initiates Action
        2) Server Redirects Auth URL with Client ID and Scope
        3) OAuth (GitHub) Redirects with Authorization Code
        4) Server calls Access Token URL with "Authorization Code" and "Client Secret"
        5) GitHub responds to Server with Access Token / Server saves Token in Cookie
        6) Server send API call including Access Token
        7) OAuth (GitHub) responds with API data (and allows other API calls with cached Access Token)
        8) Server responds to Client with data with GitHub
 */


/**
 * * JSON Web Tokens (JWT) (2 Parts: Payload & Singature)
      Compact and self-contained way for transmitting information between parties as a JSON object that are integrity protected through a signature.

 ** 1) JSON Payload 
      JSON object that stores user information.
      Server checks JWT and can identify the user without having to query DB.
 ** 2) JSON Signature 
      Used to confirtm the validity of the payload.
      One-way hash of the payload + secret stored on the server

 */


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page does not exist.'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, console.log(`listening on port ${PORT}...`));

module.exports = app;