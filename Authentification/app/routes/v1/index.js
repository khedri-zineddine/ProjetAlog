import { Router } from "express"
import { authRoutes } from './auth.routes'
const routerV1 = Router()
routerV1.use('/auth', authRoutes)
export { routerV1 }