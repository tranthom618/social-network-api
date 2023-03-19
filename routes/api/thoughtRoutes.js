const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controllers/thoughtController.js');

// /api/user
router.route('/').get(getThought).post(createThought);

// /api/user/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;