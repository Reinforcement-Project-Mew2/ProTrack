const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

const MONGO_URI = process.env.MONGO_DB_URI;

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    dbName: 'proTracks_project'
  })
    .then(() => console.log('(Project) Connected to Mongo DB'))
    .catch(err => console.log(err));

const projectSchema = new Schema({
  project_id: { 
    project_name: { type: String, required: true },
    project_created_by: String,
    project_members: Array,
    project_description: String,
    project_start_date: { type: Date, required: true },
    project_end_date: { type: Date, required: true },
    tasks: {
      task_id: {
        task_name: { type: String, required: true },
        task_created_by: { type: String, required: true },
        task_members: Array,
        task_content: String,
        task_start_date: { type: Date, required: true },
        task_end_date: Date,
        sub_tasks: {
          sub_task_id: {
            sub_task_name: { type: String, required: true },
            sub_task_members: Array,
            sub_content: String,
            sub_task_start_date: { type: Date, required: true },
            sub_task_end_date: Date,
          }
        }
      }
    }
  }
});

module.exports = mongoose.model('Project', projectSchema);