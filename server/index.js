import express from "express"
import bodyParser from "body-parser"
import cors from "cors";
import dotenv from 'dotenv';
import userRoutes from "./routes/users.js";
import Connection from './database/db.js';

const app = express();


dotenv.config();


app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", userRoutes);
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = '5000';
Connection(USERNAME, PASSWORD);
app.listen(PORT, () => console.log(`server is listening on port: http://localhost:${PORT}`))