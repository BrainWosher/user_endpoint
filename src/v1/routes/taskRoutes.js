const express = require('express');
const taskController = require('../../constrollers/taskController');

const router = express.Router();

router.get('/', taskController.getAllTasks);

router.get('/:taskId', taskController.getOneTask);

router.post('/', taskController.createNewTask);

router.patch('/:taskId', taskController.updateOneTask);

router.delete('/:taskId', taskController.deleteOneTask);

module.exports = router;
