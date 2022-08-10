const express = require('express');
const projectController = require('../controllers/projectControllers');

const router = express.Router();

router.get('/:id', projectController.getProjects, (req, res) => {
    return res.status(200).json(res.locals.projectData);
});

router.post('/', projectController.createProject, (req, res) => {
    return res.status(200).json(res.locals.newProject);
});

// router.post('/', projectController.updateProject, (req, res) => {
//     return res.status(200).json(res.locals.updatedProject);
// });

// router.delete('/', projectController.deleteTask, projectController.getProjects, (req, res) => {
//     return res.status(200).json(res.locals.projectData);
// });


module.exports = router;