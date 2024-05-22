const { Router } = require("express");
const { User, Skill } = require("../models");
const { BadRequest, Unauthorized, Forbidden, NotFound } = require("../errors");
const { skillSchema } = require("../utils/validation");

const router = Router();

// 스킬 조회
router.get("/", async (req, res, next) => {
  try {
    if (!req.session.passport) {
      throw new Unauthorized("로그인 후 이용 가능합니다.");
    }

    const { userId, name } = req.session.passport.user; // userId를 session에 있는 userId 값으로
    const skill = await Skill.find({ userId }).lean();

    if (skill.length < 1) {
      throw new NotFound("등록된 스킬을 찾을 수 없습니다."); // 404 에러
    }

    res.status(200).json({
      error: null,
      message: `${name}님의 전체 스킬 수는 ${skill.length}개 입니다.`,
      data: skill,
    });
  } catch (e) {
    next(e);
  }
});

// 스킬 추가
router.post("/", async (req, res, next) => {
  try {
    // 세션 확인(401 error)
    if (!req.session.passport) {
      throw new Unauthorized("로그인 후 이용 가능합니다.");
    }

    const { userId } = req.session.passport.user; // id를 session에 있는 id 값으로
    const { stack } = req.body;

    // Joi validation
    const { error } = skillSchema.validate({ stack });
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      throw new BadRequest(errorMessages[0]); // 400 에러
    }

    const skill = await Skill.create({
      userId,
      stack,
    });

    res.status(201).json({
      error: null,
      message: "스킬이 추가되었습니다.",
      data: {
        userId: skill.userId,
        skillId: skill.skillId,
        stack: skill.stack,
      },
    });
  } catch (e) {
    next(e);
  }
});

// 스킬 수정
router.put("/:skillId", async (req, res, next) => {
  try {
    if (!req.session.passport) {
      throw new Unauthorized("로그인 후 이용 가능합니다.");
    }

    const { userId } = req.session.passport.user; // id를 session에 있는 id 값으로
    const { skillId } = req.params;
    const { stack } = req.body;

    // Joi validation
    const { error } = skillSchema.validate({ stack });
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      throw new BadRequest(errorMessages[0]); // 400 에러
    }

    const skill = await Skill.findOneAndUpdate(
      { userId, skillId },
      { stack },
      { runValidators: true, new: true }
    ).lean();

    res.status(200).json({
      error: null,
      message: "스킬 정보를 수정했습니다.",
      data: {
        userId: skill.userId,
        skillId: skill.skillId,
        stack: skill.stack,
      },
    });
  } catch (e) {
    next(e);
  }
});

// 스킬 삭제
router.delete("/:skillId", async (req, res, next) => {
  try {
    if (!req.session.passport) {
      throw new Unauthorized("로그인 후 이용 가능합니다.");
    }

    const { userId, name } = req.session.passport.user;
    const { skillId } = req.params;

    const skill = await Skill.findOneAndDelete({
      userId,
      skillId,
    }).lean();

    if (skill === null) {
      throw new NotFound("요청하신 유저의 스킬 ID에 자료가 존재하지 않습니다.");
    }

    res.status(200).json({
      error: null,
      message: `${name}님의 ${skillId}번 스킬 데이터를 삭제했습니다.`,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
