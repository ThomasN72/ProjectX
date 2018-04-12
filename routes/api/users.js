const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router.post('/', usersController.createUser);

router.get('/:email', usersController.getUser);

module.exports = router;