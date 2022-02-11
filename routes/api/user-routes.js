const router = require("express").Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../../controllers/user-controller");

// endpoint to get all users
router.route("/")
    .get(getAllUsers)
    .post(createUser);

// endpoint to get user by Id
router.route("/:userId")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;