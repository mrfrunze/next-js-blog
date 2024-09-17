import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        min:3,
        max:20,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        max:50,
    },
    password:{
        type: String,
        require: true,
        min:6,
    },
    img: {
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},{timestamps: true})

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    img: {
        type: String,
    },
    userId:{
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true,
        unique: true,
    }

},{timestamps: true})

export const User = mongoose.model.User || mongoose.model("User", userSchema)
export const Post = mongoose.model.Post || mongoose.model("Post", postSchema)