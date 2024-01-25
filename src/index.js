import dotenv from 'dotenv'
import connectDB from "./db/index.db.js";
import {app} from './app.js'


dotenv.config({
    path:"./env"
})
const port=process.env.PORT||3000



connectDB()
.then(()=>{
    app.get('/',(req,res)=>{
        res.send("mongoDB atlas connection successfully !!!")
        
    })
    app.on("error",()=>{
        console.log("error app.om event")
        throw error
    })
    app.listen(port,()=>{
        console.log(`Server is running on ${port} index.js` )
    })
})
.catch((error)=> console.log("error on catch ++++  ", error.message))
.finally(()=> console.log('process is done'))











/* const app = express()

    ; (async () => {
        try {
            const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", () => {
                console.log("error : ", error)
                throw error;
            })
            app.listen(process.env.MONGODB_URI, () => {
                console.log(`Application is running on ${process.env.MONGODB_URI} port`)
            })
        } catch (error) {
            console.log("Error :", error)
            throw error;
        }
    })()
*/