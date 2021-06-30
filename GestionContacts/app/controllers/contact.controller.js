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
export class ContactController {
    static addContact = async (req, res) => {
        const contact = {
            status: req.body.status,
            sexe: req.body.sexe,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            mobile: req.body.mobile,
            address: req.body.address
        }
        try {
            const con = await Contact.create(contact)
            return res.status(200).send({ success: true, message: "User created successfully" })
        } catch (error) {
            console.log(error.message)
            res.status(500).send({ success: false, message: error.message })
        }

    }
    /****************************************  
        * 
        * Fetch contacts from dataBase
        * @param req Requeset express
        * @param res Response express
        * @return message sucess
        * 
    ****************************************/
    static fetchContacts = async (req, res) => {

        try {
            const contacts = await Contact.findAll()
            res.status(200).send({ success: true, contacts, length: contacts.length })
        } catch (err) {
            res.status(500).send({ success: false, message: err.message })
        }

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
    static deleteContact = async (req, res) => {
        try {
            const contact = await Contact.findByPk(req.body.contactId)
            const isDeleted = await contact.destroy()
            res.status(200).send({ success: true, message: "Contact deleted successfully" })

        } catch (err) {
            res.status(500).send({ success: false, message: err.message })
        }

    }
    static updateContact = async (req, res) => {
        try {
            const contact = await Contact.findByPk(req.body.contactId)
            const isUpdated = await contact.update(req.body)
            return res.status(200).send({ success: true, message: 'contact update successfully' })
        } catch (err) {
            return res.status(500).send({ success: false, message: err.message })
        }
    }
}
