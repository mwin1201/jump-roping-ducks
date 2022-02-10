const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: "A username is required",
        trim: true
    },
    email: {
        type: String,
        required: "An email is required",
        unique: true,
        match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/]
    },
    thoughts: [],
    friends: []
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

UserSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;