const router = require("express").Router();
const { getAllUsers, getUserById, createUser } = require("../../controllers/user-controller");

// endpoint to get all users
router.route("/")
    .get(getAllUsers)
    .post(createUser);

// endpoint to get user by Id
router.route("/:userId").get(getUserById);

module.exports = router;