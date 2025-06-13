import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config();
export const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server Listening at the port ${PORT}`);
})