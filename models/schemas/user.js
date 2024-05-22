const { Schema } = require("mongoose");

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "설명이 아직 없습니다. 설명을 추가해주세요.",
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
  profileImg: {
    type: String,
    required: true,
    default: "defaultImg.jpg",
  },
  position: {
    type: String,
    required: true,
    default: "user",
  },
});

module.exports = UserSchema;
