import { Contact } from "../models/index"

/****************************************  
    * 
    * Create new contact in dataBase
    * @param req the request must contain
    *   @subParam \Models\Contact contact
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const addContact = (req, res) => {
    const contact = req.body.contact
    if (!contact) {
        return res.status(200).send({ success: true, message: "Contact object is missing" })
    }
    Contact.create(contact).then((savedContact) => res.status(201).send({ success: true, site: savedContact }))
        .catch((error) => res.status(400).send({ success: false, message: error.message }))
}
/****************************************  
    * 
    * Fetch contacts from dataBase
    * @param req Requeset express
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const fetchContacts = (req, res) => {

    Contact.findAll().then((contacts) => res.status(200).send({ success: true, contacts: contacts }))
        .catch((error) => { res.status(400).send({ success: false, message: error.message }); });

}

/****************************************  
    * 
    * Delete  contat from dataBase
    * @param req the request must contain
    *   @subParam Integer contactId
    * @param res Response express
    * @return message sucess
    * 
****************************************/
export const deleteContact = (req, res) => {
    Contact.findByPk(req.body.contactId).then(contact => {
        if (contact) {
            return res.status(400).send({
                success: false,
                message: 'contact Not Found',
            });
        }
        contact.destroy()
            .then(() => res.status(204).send({ success: true, message: "contact deleted successfully" }))
            .catch((error) => res.status(400).send({ success: false, message: error.message }));
    })

}