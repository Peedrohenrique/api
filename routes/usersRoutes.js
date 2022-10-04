const express = require("express");
const router = express.Router();
const ControllerUsers = require("../controllers/ControllerUsers");
const usersMiddleware = require("../middlewares/usersMiddleware");

router.get("/usuarios", ControllerUsers.getAll);
router.get("/usuario/:id", ControllerUsers.getFindOne);
router.post(
  "/usuario/post",
  usersMiddleware.validateBody,
  ControllerUsers.post
);
router.put(
  "/usuario/update/:id",
  usersMiddleware.validateBody,
  ControllerUsers.update
);
router.delete("/usuario/:id", ControllerUsers.delete);

module.exports = router;
