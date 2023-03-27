const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controllers/thoughtController.js');

// API Route to Get all Thoughts or Create Thoughts
router.route('/').get(getThought).post(createThought);

// API Route to Get Single Thought, Update Thought, or Delete Thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Reactions Routes
const {
  addReaction,
  deleteReaction,
} = require('../../controllers/reactionController.js');

// API Route to Create Reaction to a Thought
router.route('/:thoughtId/reactions').post(addReaction)

// API Route to Delete Reaction to a Thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;