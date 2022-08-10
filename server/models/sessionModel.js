const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

const MONGO_URI = process.env.mongodbURL;

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    dbName: 'proTracks_session'
  })
    .then(() => console.log('(Session) Connected to Mongo DB'))
    .catch(err => console.log(err));

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);