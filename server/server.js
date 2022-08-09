const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require("cors")

const PORT = 3000;
const authenticationController = require('./controllers/authenticationControllers');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');


//RESEARCH: 
// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/unit11test' : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/src', express.static(path.resolve(__dirname, '../src')));


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