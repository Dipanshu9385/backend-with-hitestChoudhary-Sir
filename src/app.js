import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({
   origin:process.env.CORS_ORIGIN,
   credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())





export { app };















// app.get("/",(req,res)=>{
//     // res.send("Home Page || Dipanshu yadav || MERN Developer|| Make patience")
//     res.send(result.name)
// })
// const port=4000
// app.listen(port,()=>{
//     console.log(`Server is running on ${port} port`)
// })