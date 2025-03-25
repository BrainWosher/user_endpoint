const express = require('express');
const userController = require('../../constrollers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getOneUser);

router.post('/', userController.createNewUser);

router.patch('/:userId', userController.updateOneUser);

router.delete('/:userId', userController.deleteOneUser);

module.exports = router;
