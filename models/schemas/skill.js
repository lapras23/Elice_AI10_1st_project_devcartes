const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const SkillSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
});

SkillSchema.plugin(AutoIncrement, {
  id: "skill_sequence",
  reference_fields: "userId",
  inc_field: "skillId",
});

module.exports = SkillSchema;
