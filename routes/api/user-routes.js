const router = require("express").Router();
const { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser,
    addFriend,
    deleteFriend } = require("../../controllers/user-controller");

// endpoint to get all users
router.route("/")
    .get(getAllUsers)
    .post(createUser);

// endpoint to get user by Id
router.route("/:userId")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// endpoint to post and delete friends
router.route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;