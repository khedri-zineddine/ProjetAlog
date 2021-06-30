import { Router } from "express"
<<<<<<< HEAD
import { AuthController } from '../../controllers'
const authRoutes = Router()
authRoutes.post('/user-login', AuthController.login)
export { authRoutes }
=======
import {AuthController} from '../../controllers'
const authRoutes = Router()
authRoutes.post('/auth',AuthController.Login)
export {AuthRoutes}
>>>>>>> de76e14d3a26e6c8b81b820b463ede634cf59bba
