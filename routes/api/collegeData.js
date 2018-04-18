const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");



router.get('/', collegeController.findData);


module.exports = router;