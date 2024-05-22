const { Router } = require("express");
const projectRouter = require("./project");
const skillRouter = require("./skill");

const router = Router();

router.use("/project", projectRouter);
router.use("/skill", skillRouter);

module.exports = router;
