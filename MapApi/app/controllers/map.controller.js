import { SitePagination } from '../models'

/****************************************  
    * 
    * Create new site in dataBase
    * @param req the request must contain
    *   @subParam index Integer
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const getSitePages = (req, res) => {
    SitePagination.findAll(req.body.index).then(result => {
        return res.status(200).send({ success: true, data: result })
    }).catch(err => res.status(400).send({ success: false, message: err.message }))
}
/****************************************  
    * 
    * Create new site in dataBase
    * @param req the request must contain
    *   @subParam page Page
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const setPage = (req, res) => {
    SitePagination.setPage(req.body.page).then(result => {
        return res.status(200).send({ success: true, message: "Current Site page is modified successfully" })
    }).catch(err => {
        return res.status(500).send({ success: false, message: err.message })
    })
}
/****************************************  
    * 
    * Create new site in dataBase
    * @param req the request must contain
    *   @subParam nb Integer
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const getNbPages = (req, res) => {
    SitePagination.getNb(req.body.nb).then(result => {
        return res.status(200).send({ success: true, data: result })
    }).catch(err => {
        return res.status(500).send({ success: false, message: err.message })
    })

}
