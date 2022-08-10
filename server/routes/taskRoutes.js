const express = require('express');
const taskController = require('../controllers/taskControllers');

const router = express.Router();

// router.get('/', taskController.getTasks, (req, res) => {
//     return res.status(200).json(res.locals.taskData);
// });

router.post('/', taskController.createTask, (req, res) => {
    return res.status(200).json(res.locals.newTask);
});

router.post('/:id', taskController.updateTask, (req, res) => {
    return res.status(200).json(res.locals.updatedTask);
});

router.delete('/', taskController.deleteTask, taskController.getTasks, (req, res) => {
    return res.status(200).json(res.locals.taskData);
});


module.exports = router;