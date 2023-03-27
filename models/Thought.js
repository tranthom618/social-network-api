const { Schema, model } = require('mongoose');
const dateUtil = require("../utils/dateUtil");
const reactionSchema = require("./Reaction");

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: timestamp => dateUtil(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema,
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;