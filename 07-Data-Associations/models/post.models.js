const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    like: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ]

})

const Post = mongoose.model('post', postSchema)

module.exports = Post;