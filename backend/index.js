import dotenv from 'dotenv'
import connectDb from './src/db/index.js'
import app from './app.js'


dotenv.config({
     path:"./.env"
})

connectDb()
.then((res)=>{
     app.listen(process.env.PORT,()=>{
          console.log(`Server is running on port ${process.env.PORT}`)
          
     })
     app.get("/",(req , res)=>{
          res.send("hello world")
          
     })
     app.on("error",()=>{
          console.log(`server error : ${err.message}`)
          process.exit(1)
     })
     
})
.catch((err)=>{
     console.log(`server error : ${err.message}`)
     throw err;
})