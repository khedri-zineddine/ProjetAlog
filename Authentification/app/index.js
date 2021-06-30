import express from 'express';
import { json } from "express";
import cors from 'cors';
import morgan from 'morgan';
import { createConnection } from './services'
//import router from './routes'
const app = express()
<<<<<<< HEAD
try {
    createConnection()
        .then(connection => {
            const Routes = require('./routes')
            app.use(json())
            app.use(cors())
            app.use(morgan("dev"))
            app.use(Routes.router)
            app.listen(process.env.PORT, () => {
                console.log("server started." + process.env.PORT)
            })
        })
} catch (err) {
    console.log(err.message)
}
=======
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
>>>>>>> de76e14d3a26e6c8b81b820b463ede634cf59bba
