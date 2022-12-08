const express=require("express")
const app=express()
const cors=require("cors")
const port=3000;
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")
const mongoose=require("mongoose")
console.log(Register)

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://navya2003:navyanavi242@cluster0.9clcbof.mongodb.net/seconddb?retryWrites=true&w=majority")
.then(()=>{
	console.log("Created mongodb database")
})
.catch((err)=>{
	console.log(err)
})
app.get("/",(req,res)=>{
	res.send("hi am server")
})
app.post("/register",(req,res)=>{
	//const {username,password}=req.body
	const username="dummy username",password="dummy password"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})
app.listen(port,()=>console.log("server is started"))