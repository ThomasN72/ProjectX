const router = require("express").Router();
const usersRoutes = require("./users.js");

// User routes
router.use("/users", usersRoutes);

module.exports = router;