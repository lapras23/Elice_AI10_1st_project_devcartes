const passport = require("passport");

const local = require("./strategies/local");

module.exports = () => {
  // 작성한 strategy를 사용
  passport.use(local);

  // 로그인 성공 시 실행되는 done에서 user 객체를 전달 받아 session에 저장
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // 서버로 들어오는 요청마다 serializeUser에서 저장된 세션 정보를 실제 데이터와 비교함
  // 해당하는 유저 정보가 있으면 done의 두번 째 인자에 저장함
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
};
