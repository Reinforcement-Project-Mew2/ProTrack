const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require("cors");

const { cookieController, sessionController } = require('./controllers/authenticationControllers');
// const userRoutes = require('./routes/userRoutes');
// const taskRoutes = require('./routes/taskRoutes');
// const projectRoutes = require('./routes/projectRoutes');

const PORT = 3000;
const app = express();

app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/src', express.static(path.resolve(__dirname, '../src')));

// app.use("/user", userRoutes);
// app.use("/task", taskRoutes);
// app.use("/project", projectRoutes);

// Create a new Project 
app.get('/', cookieController.setCookie, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'))
});
 
/**
 * *  Create a new User (SignUp)
 *    Request:  POST
 *    From:     Create User Page
 *    To: '/signup' -> (200) '/secret' | (404) global err -> 
 *    Body:     username, first_name, last_name, password, email, (created_on)
 * 
 * *  User OAuth to access create an account
 *  
 */

/**
 * *  Create a new User (Login)
 *    Request:  POST
 *    From:     Login Page
 *    To:       '/signup' -> (200) '/secret' | (404) global err -> 
 *    Body:     username, first_name, last_name, password, email, (created_on)
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