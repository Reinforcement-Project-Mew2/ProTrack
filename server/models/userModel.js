const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.mongodbURL;
console.log(process.env.mongodbURL)
mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  dbName: 'proTracks_user'
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  created_on: { type : Date, default: Date.now},
  email: { type: String, required: true }  
});

module.exports = mongoose.model('User', userSchema);