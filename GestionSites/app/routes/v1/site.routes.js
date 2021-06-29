import { Router } from "express"
import {SiteController} from '../../controllers'
const siteRoutes = Router()
siteRoutes.post('/add-site',SiteController.addSite)
export {siteRoutes}
