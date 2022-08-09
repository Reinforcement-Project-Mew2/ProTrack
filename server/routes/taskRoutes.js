const express = require('express');
const taskController = require('../controllers/taskControllers');

const router = express.Router();

router.get('/:id', taskController.getTasks, (req, res) => {
    return res.status(200).json(res.locals.taskData);
});

router.post('/', taskController.createTask, (req, res) => {
    return res.status(200).json(res.locals.newTask);
});

router.post('/', taskController.updateTask, (req, res) => {
    return res.status(200).json(res.locals.updatedTask);
});

router.delete('/', taskController.deleteTask, taskController.getTasks, (req, res) => {
    return res.status(200).json(res.locals.taskData);
});

// EXPORT THE ROUTER
module.exports = router;