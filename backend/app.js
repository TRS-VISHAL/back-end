import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use(cookieParser());
app.use(express.static("public"))
app.use(express.json({
     limit:"16kb"
}))
app.use(urlencoded({
     limit:"16kb",
     extended:true
}));

app.use(cors)

export default app