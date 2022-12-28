import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/user",router);
app.use("/api/blogs",blogRouter);

mongoose.connect('mongodb+srv://admin:7QrDLB6slGrzRWdr@cluster0.1g6ydcb.mongodb.net/?retryWrites=true&w=majority')
.then(()=>
    app.listen(5000))
.then(()=>
    console.log('connected'))
.catch((err)=>
    console.log(err));
    
// app.use("/api", (req,res,next)=>{
//     res.send("hello world");
// });


//C9ddJ4cmSQKQpaYA
//7QrDLB6slGrzRWdr