const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

const MONGO_URI = process.env.mongodbURL;

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    dbName: 'proTracks_project'
  })
    .then(() => console.log('(Project) Connected to Mongo DB'))
    .catch(err => console.log(err));

const projectSchema = new Schema({
  project_name: { type: String, required: true },
  project_created_by: String,
  project_members: Array,
  project_description: String,
  project_start_date: { type: Date, default: Date.now },
  project_end_date: Date,
  tasks: [{
    task_id: String,
    task_name: String,
    task_created_by: String,
    task_members: Array,
    task_content: String,
    task_start_date: Date,
    task_end_date: Date,
    sub_tasks: [{
        sub_task_id: {
        sub_task_name: String ,
        sub_task_members: Array,
        sub_content: String,
        sub_task_start_date: Date,
        sub_task_end_date: Date,
      }
    }]
  }]
});

module.exports = mongoose.model('Project', projectSchema);