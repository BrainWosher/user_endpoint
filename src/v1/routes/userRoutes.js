const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all users');
});

router.get('/:userId', (req, res) => {
  res.send('Get an existing user');
});

router.post('/', (req, res) => {
  res.send('Create a new user');
});

router.patch('/:userId', (req, res) => {
  res.send('Update an existing user');
});

router.delete('/:userId', (req, res) => {
  res.send('Delete an existing user');
});

module.exports = router;
