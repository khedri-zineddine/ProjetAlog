import { Router } from "express"
import { userRoutes } from './user.routes'
const routerV1 = Router()
routerV1.use('/users', userRoutes)
export { routerV1 }