import { Site, TechData } from '../models'

export class SiteController {
    /****************************************  
        * 
        * Create new site in dataBase
        * @param req the request must contain
        *   @subParam \Models\Site site
        * @param res Response express
        * @return message sucess
        * 
    ****************************************/
    static addSite = async (req, res) => {
        const site1 = {
            category: req.body.category,
            siteInternet: req.body.siteInternet,
            address: req.body.address,
            createYear: req.body.createYear,
            phoneSite: req.body.phoneSite,
            photoSite: req.body.photoSite
        }
        const dataTech1 = req.body.dataTech
        try {
            const site = await Site.create(site1)
            dataTech1.idSite = site.idSite
            const dataTech = await TechData.create(dataTech1)
            res.status(200).send({ success: true, message: "Site and tech data were created successfully" })
        } catch (err) {
            res.status(500).send({ success: false, message: err.message })
        }
    }
    /****************************************  
        * 
        * Fetch sites from dataBase
        * @param req Requeset express
        * @param res Response express
        * @return message sucess
        * 
    ****************************************/
    static fetchSites = async (req, res) => {
        try {
            const sites = await Site.findAll()
            res.status(200).send({ success: true, sites, length: sites.length })
        } catch (err) {
            res.status(500).send({ success: false, message: err.message })
        }


    }

    /****************************************  
        * 
        * Delete  site from dataBase
        * @param req the request must contain
        *   @subParam Integer siteId
        * @param res Response express
        * @return message sucess
        * 
    ****************************************/
    static deleteSite = async (req, res) => {
        try {
            const site = await Site.findByPk(req.body.siteId)
            const isDeleted = await site.destroy()
            res.status(200).send({ success: true, message: "Site deleted successfully" })

        } catch (err) {
            res.status(500).send({ success: false, message: err.message })
        }


    }
    static updateSite = async (req, res) => {
        try {
            const site = await Site.findByPk(req.body.siteId)
            const isUpdated = await site.update(req.body)
            res.status(200).send({ success: true, message: "Site updated successfully" })

        } catch (err) {
            res.status(500).send({ success: false, message: err.message })
        }

    }

}
