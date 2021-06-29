import { TechData } from '../models'

/****************************************  
    * 
    * Create new site in dataBase
    * @param dataTech instance of TechData
    * @return  return  the created data
    * 
****************************************/
export const addDataTech = (dataTech) => {
    TechData.create(dataTech).then(result => {
        return res.status(200).send({ success: true, dataTech: result })

    }).catch(err => {
        return res.status(400).send({ success: false, message: err.message })
    })
}
/****************************************  
    * 
    * Fetch dataTechs from dataBase
    * @param Express Request
    * @param Express Response
    * @return  return  response with the fetched data
    * 
****************************************/
export const fetchDataTechs = (req, res) => {
    TechData.findAll().then(result => {
        return res.status(200).send({ success: true, dataTechs: result })

    }).catch(err => {
        return res.status(400).send({ success: false, message: err.message })
    })
}
/****************************************  
    * 
    * Fetch dataTechs from dataBase
    * @param Express Request
    *   @subParam iDDataTech Integer
    * @param Express Response
    * @return  return  response with the designated data
    * 
****************************************/
export const findDataTech = (req, res) => {
    TechData.findByPk(req.params.idDataTech).then(result => {
        return res.status(200).send({ success: true, dataTech: result })

    }).catch(err => {
        return res.status(400).send({ success: false, message: err.message })
    })
}
/****************************************  
    * 
    * Fetch dataTechs from dataBase
    * @param Express Request
    *   @subParam dataTechId Integer
    * @param Express Response
    * @return  return  response with the success status and message 
    * 
****************************************/
export const deleteDataTech = (req, res) => {
    TechData.findByPk(req.body.dataTechId).then(dataTech => {
        if (dataTech) {
            return res.status(400).send({
                success: false,
                message: 'dataTech Not Found',
            });
        }
        dataTech.destroy()
            .then(() => res.status(204).send({ success: true, message: "dataTech deleted successfully" }))
            .catch((error) => res.status(400).send({ success: false, message: error.message }));
    })
}