import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/db_connection.js";
import { errorMiddle } from "./error/error.js";
import reservationRouter from "./routes/reservationRouter.js";


const app = express();
dotenv.config({path: "./config/config.env"});


app.use(cors({
    origin: [process.env.CLIENT_URL],
    methods: ['POST'],
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/v1/reservation', reservationRouter)

dbConnection();
app.use(errorMiddle);


export default app;
