import { addPaymentMethod, fetchAllCards, payForCustomer } from "../controllers/index"
const router = require("express").Router()

router.post("/payForCustomer", payForCustomer)
router.post("/addPaymentMethod", addPaymentMethod)
router.get("/fetchAllCards", fetchAllCards)