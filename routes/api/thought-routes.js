const router = require("express").Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReply,
    deleteReply
} = require("../../controllers/thought-controller");

router.route("/")
    .get(getAllThoughts)
    .post(createThought);

router.route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route("/:thoughtId/reactions")
    .post(createReply);

router.route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReply);

module.exports = router;