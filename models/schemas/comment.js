const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const CommentSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  boardId: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
});

CommentSchema.plugin(AutoIncrement, {
  id: "comment_sequence",
  reference_fields: "boardId",
  inc_field: "commentId",
});

module.exports = CommentSchema;
