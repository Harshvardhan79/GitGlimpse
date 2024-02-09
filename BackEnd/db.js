const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://hjha5835:IdOzLIUG8v2FdwQ4@cluster0.xyhh49v.mongodb.net/GITHUB_USERS")

const userSchema=mongoose.Schema({
    username:String,
    password:String
})

const User=mongoose.model("Users",userSchema);

module.exports={User};