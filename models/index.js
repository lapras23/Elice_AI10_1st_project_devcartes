const mongoose = require("mongoose");
const ProjectSchema = require("./schemas/project");
const CounterSchema = require("./schemas/counter");
const BoardSchema = require("./schemas/board");
const SkillSchema = require("./schemas/skill");

exports.Project = mongoose.model("Project", ProjectSchema);
exports.Counter = mongoose.model("Counter", CounterSchema);
exports.Board = mongoose.model("Board", BoardSchema);
exports.Skill = mongoose.model("Skill", SkillSchema);
