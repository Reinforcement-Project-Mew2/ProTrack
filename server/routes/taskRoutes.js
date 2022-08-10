const express = require('express');
const taskControllers = require('../controllers/taskControllers');

const router = express.Router();

router.get('/', taskControllers.getTasks, (req, res) => {
    return res.status(200).json(res.locals.taskData);
});

router.post('/', taskControllers.createTask, (req, res) => {
    return res.status(200).json(res.locals.newTask);
});

// router.post('/:id', taskController.updateTask, (req, res) => {
//     return res.status(200).json(res.locals.updatedTask);
// });

router.delete('/', taskControllers.deleteTask, taskControllers.getTasks, (req, res) => {
    return res.status(200).json(res.locals.taskData);
});


module.exports = router;