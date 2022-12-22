import mongoose from "mongoose";

const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    headline:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: ()=> Date.now()
    },
    updatedAt:  {
        type: Date,
        default: ()=> Date.now()
    },
}

);

export default mongoose.model("Blog",blogSchema);