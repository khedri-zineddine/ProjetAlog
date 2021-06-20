let { addContact, deleteContact, fetchContacts } = require("../controllers/contact.controller")

const router = require("express").Router()
router.post("/contacts/createContact", addContact)
router.get("/contacts/getContacts", fetchContacts)
router.delete("/contacts/deleteContact", deleteContact)
module.exports = router