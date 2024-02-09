const express=require("express");
const jwt=require("jsonwebtoken");
const { USERZ } = require("./validation");
const { User } = require("./db");
const { JWT_SECRET } = require("./config");

const app=express();
app.use(express.json());

app.post("/signup",async (req,res)=>{
    const body=req.body;
    const {success}=USERZ.safeParse(body);

    if(!success){
        return res.status(411).json({
            message:"Incorrect inputs"
        })
    }

    const existingUser=await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message:"Already have an account"
        })
    }

    const newuser=await User.create({
        username:req.body.username,
        password:req.body.password
    })

    const userId=newuser._id;

    const token=jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        message:"User created successfully",
        token:token
    })

})