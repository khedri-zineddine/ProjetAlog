import { Site } from '../models'

/****************************************  
    * 
    * Create new site in dataBase
    * @param req the request must contain
    *   @subParam \Models\Site site
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const addSite = (req, res) => {
    const site = req.body.site
    if (!site) {
        return res.status(200).send({ success: true, message: "site object is missing" })
    }
    Site.create(site).then((savedSite) => res.status(201).send({ success: true, site: savedSite }))
        .catch((error) => res.status(400).send({ success: false, message: error.message }))
}

/****************************************  
    * 
    * Fetch sites from dataBase
    * @param req Requeset express
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const fetchSites = (req, res) => {

    Site.findAll().then((sites) => res.status(200).send({ success: true, classrooms: classrooms }))
        .catch((error) => { res.status(400).send({ success: false, message: error.message }); });

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
export const deleteSite = (req, res) => {
    Site.findByPk(req.body.siteId).then(site => {
        if (site) {
            return res.status(400).send({
                success: false,
                message: 'Site Not Found',
            });
        }
        site.destroy()
            .then(() => res.status(204).send({ success: true, message: "Site deleted successfully" }))
            .catch((error) => res.status(400).send({ success: false, message: error.message }));
    })

}