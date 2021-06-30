import { Router } from "express"
import { contactRoutes } from './contact.routes'
const routerV1 = Router()
routerV1.use('/contacts', contactRoutes)
export { routerV1 }