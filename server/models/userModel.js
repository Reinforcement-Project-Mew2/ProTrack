const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.mongodbURL;
const bcrypt = require('bcrypt')

mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  dbName: 'proTracks_user'
})
  .then(() => console.log('(User) Connected to Mongo DB'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  created_on: { type : Date, default: Date.now},
  email: { type: String, required: true },
  projects: [Number]
});

userSchema.pre('save', async function(next){
  if(this.isModified('password')) this.password = await bcrypt.hash(this.password, 12)
  next()
})

module.exports = mongoose.model('User', userSchema);