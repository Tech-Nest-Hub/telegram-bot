import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { initTelegramBot } from "./controllers/telegramControllers.js";




dotenv.config();
export const app = express();
app.use(cors());
app.use(express.json());


initTelegramBot();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server Listening at the port ${PORT}`);
})