import { Router } from "express"
import {siteRoutes} from './site.routes'
const routerV1 = Router()
routerV1.use('/sites',siteRoutes)
export {routerV1}