const router = require("express").Router()
const controller = require("../controllers/index")
router.post("/sites/createSite", controller.addSite).post("/dataTechs/createDataTech", controller.addDataTech)
router.get("/sites/getSites", controller.fetchSites).get("/dataTechs/getDataTechs", controller.fetchDataTechs).get("/dataTechs/getDataTechs/:idDataTech",)
router.delete("/sites/deleteSite".controller.deleteSite).delete("dataTechs/deleteDataTech", controller.deleteDataTech)
module.exports = router