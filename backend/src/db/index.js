import mongoose from "mongoose";
import { DB_NAME } from "../../constant.js";

const connectDb = async() =>{
try {
     const db = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
     console.log(`MongoDB connected successfully: ${db.connection.name}`);
} catch (error) {
     console.log(`Failed to connect ${error.message}`);
}
}

export default connectDb;