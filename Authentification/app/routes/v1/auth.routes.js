import { Router } from "express"
import {AuthController} from '../../controllers'
const authRoutes = Router()
authRoutes.post('/auth',AuthController.Login)
export {AuthRoutes}
