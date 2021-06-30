import { Router } from "express"
import { SiteController } from '../../controllers'
const siteRoutes = Router()
siteRoutes.post('/add-site', SiteController.addSite)
siteRoutes.get('/get-sites', SiteController.fetchSites)
siteRoutes.delete('/delete-site', SiteController.deleteSite)
siteRoutes.put('/update-site', SiteController.updateSite)
export { siteRoutes }
