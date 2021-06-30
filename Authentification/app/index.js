import express from 'express';
import { json } from "express";
import cors from 'cors';
import morgan from 'morgan';
import { createConnection } from './services'
//import router from './routes'
const app = express()
createConnection()
.then(connection=>{
   const Routes = require('./routes')
    app.use(json())
    app.use(cors())
    app.use(morgan("dev"))
    app.use(Routes.router)
    app.listen(process.env.PORT, () => {
        console.log("server started."+process.env.PORT)
    })
})
