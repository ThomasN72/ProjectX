const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const collegeController = require("../../controllers/collegeController");

router.post('/', usersController.createUser);

router.get('/:email', usersController.getUser);

// router.get('/', usersController.findAll);

router.get('/', usersController.findOne);

module.exports = router;