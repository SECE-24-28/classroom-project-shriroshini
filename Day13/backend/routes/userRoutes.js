const express = require('express');
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getProfile
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', protect, getProfile);
router.get('/', protect, admin, getUsers);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;