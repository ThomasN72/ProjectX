const router = require("express").Router();
const usersRoutes = require("./users.js");
const collegeDataRoutes = require("./collegeData.js");


// User routes

router.use("/colleges", collegeDataRoutes);
router.use("/users", usersRoutes);

module.exports = router;