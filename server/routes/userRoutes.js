const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();

router.get('/', userController.verifyUser, (req, res) => {
    return res.status(200).json(res.locals.user);
});

router.post('/', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.user);
});

// router.post('/', userController.updateUser, (req, res) => {
//     return res.status(200).json(res.locals.updatedUser);
// });

// router.delete('/', userController.deleteUser, (req, res) => {
//     return res.status(200).json(res.locals.deleteUser);
// });


module.exports = router;