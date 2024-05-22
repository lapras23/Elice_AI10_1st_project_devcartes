const { Router } = require("express");
const { User, Project } = require("../models");
const { BadRequest, Unauthorized, Forbidden, NotFound } = require("../errors");
const { projectSchema } = require("../utils/validation");

const router = Router();

// 프로젝트 조회
router.get("/", async (req, res, next) => {
  try {
    if (!req.session.passport) {
      throw new Unauthorized("로그인 후 이용 가능합니다.");
    }

    const { userId, name } = req.session.passport.user; // userId를 session에 있는 userId 값으로
    const project = await Project.find({ userId }).lean();

    if (project.length < 1) {
      throw new NotFound("등록된 프로젝트를 찾을 수 없습니다."); // 404 에러
    }

    res.status(200).json({
      error: null,
      message: `${name}님의 전체 프로젝트 수는 ${project.length}개 입니다.`,
      data: project,
    });
  } catch (e) {
    next(e);
  }
});

// 프로젝트 추가
router.post("/", async (req, res, next) => {
  try {
    // 세션 확인(401 error)
    if (!req.session.passport) {
      throw new Unauthorized("로그인 후 이용 가능합니다.");
    }

    const { userId } = req.session.passport.user; // id를 session에 있는 id 값으로
    const { title, startDate, endDate, details } = req.body;

    // Joi validation
    const { error } = projectSchema.validate({
      title,
      startDate,
      endDate,
      details,
    });
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      throw new BadRequest(errorMessages[0]); // 400 에러
    }

    const project = await Project.create({
      userId,
      title,
      startDate,
      endDate,
      details,
    });

    res.status(201).json({
      error: null,
      message: "프로젝트가 추가되었습니다.",
      data: {
        userId: project.userId,
        projectId: project.projectId,
        title: project.title,
        startDate: project.startDate,
        endDate: project.endDate,
        details: project.details,
      },
    });
  } catch (e) {
    next(e);
  }
});

// 프로젝트 수정
router.put("/:projectId", async (req, res, next) => {
  try {
    if (!req.session.passport) {
      throw new Unauthorized("로그인 후 이용 가능합니다.");
    }

    const { userId } = req.session.passport.user; // id를 session에 있는 id 값으로
    const { projectId } = req.params;
    const { title, startDate, endDate, details } = req.body;

    // Joi validation
    const { error } = projectSchema.validate({
      title,
      startDate,
      endDate,
      details,
    });
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      throw new BadRequest(errorMessages[0]); // 400 에러
    }

    const project = await Project.findOneAndUpdate(
      { userId, projectId },
      { title, startDate, endDate, details },
      { runValidators: true, new: true }
    ).lean();

    res.status(200).json({
      error: null,
      message: "프로젝트 정보를 수정했습니다.",
      data: {
        userId: project.userId,
        projectId: project.projectId,
        title: project.title,
        startDate: project.startDate,
        endDate: project.endDate,
        details: project.details,
      },
    });
  } catch (e) {
    next(e);
  }
});

// 프로젝트 삭제
router.delete("/:projectId", async (req, res, next) => {
  try {
    if (!req.session.passport) {
      throw new Unauthorized("로그인 후 이용 가능합니다.");
    }

    const { userId, name } = req.session.passport.user;
    const { projectId } = req.params;

    const project = await Project.findOneAndDelete({
      userId,
      projectId,
    }).lean();

    if (project === null) {
      throw new NotFound(
        "요청하신 유저의 프로젝트 ID에 자료가 존재하지 않습니다."
      );
    }

    res.status(200).json({
      error: null,
      message: `${name}님의 ${projectId}번 프로젝트 데이터를 삭제했습니다.`,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
