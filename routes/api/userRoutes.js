const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Friends
const {
  addFriend,
  deleteFriend,
} = require('../../controllers/friendController.js');

// /api/courses
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;