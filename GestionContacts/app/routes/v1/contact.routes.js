import { Router } from "express"
import { ContactController } from '../../controllers'
const contactRoutes = Router()
contactRoutes.post('/add-contact', ContactController.addContact)
contactRoutes.get('/get-contacts', ContactController.fetchContacts)
contactRoutes.delete('/delete-contact', ContactController.deleteContact)
contactRoutes.put('/update-contact', ContactController.updateContact)
export { contactRoutes }
