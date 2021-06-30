import { Router } from "express"
import { AuthController } from '../../controllers'
const authRoutes = Router()
authRoutes.post('/user-login', AuthController.login)
export { authRoutes }
