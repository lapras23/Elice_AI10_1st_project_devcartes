const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { Unauthorized } = require("../../errors");

const config = {
  usernameField: "email",
  passwordField: "password",
};

const local = new LocalStrategy(config, async (email, password, done) => {
  try {
    // 입력된 유저의 email이 DB에 있는지 찾고 없으면 에러 처리
    const user = await User.findOne({ email }).lean();
    if (!user) {
      throw new Unauthorized("이메일 또는 비밀번호가 일치하지 않습니다."); // 401 에러
    }

    // 입력된 password가 DB에 있는 salting된 password와 같은지 비교하고 없으면 에러 처리
    const hashedPassword = user.password;
    const passwordCorrect = await bcrypt.compare(password, hashedPassword);

    if (!passwordCorrect) {
      throw new Unauthorized("이메일 또는 비밀번호가 일치하지 않습니다."); // 401 에러
    }

    done(null, {
      userId: user.userId,
      email: user.email,
      nickname: user.nickname,
      name: user.name,
    });
  } catch (err) {
    done(err, null);
  }
});

module.exports = local;
