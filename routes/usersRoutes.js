const express = require("express");
const router = express.Router();
const ControllerUsers = require("../controllers/ControllerUsers");

router.get("/usuarios", ControllerUsers.get);
router.get("/usuario/:id", ControllerUsers.getById);
router.post("/usuario/insert", ControllerUsers.post);
router.put("/usuario/update/:id", ControllerUsers.update);
router.delete("/usuario/:id", ControllerUsers.delete);

module.exports = router;
