import dotenv from 'dotenv'
import connectDB from "./db/index.db.js";

dotenv.config({
    path:"./env"
})



connectDB()










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