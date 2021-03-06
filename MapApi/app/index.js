import express from 'express';
import { json } from "express";
import cors from 'cors';
import morgan from 'morgan';
import {createConnection} from './services'
const app = express()

app.use(json())
app.use(cors())
app.use(morgan("dev"))
createConnection()
app.listen(process.env.PORT, () => {
    console.log("server started.")
})
