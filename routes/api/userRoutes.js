const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// API Route to Get all Users or Create Users
router.route('/').get(getUser).post(createUser);

// API Route to Get Single Users, Update Users or Delete Users
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Friends Routes
const {
  addFriend,
  deleteFriend,
} = require('../../controllers/friendController.js');

// API Route to Add Friend or Delete Friend for a User
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;