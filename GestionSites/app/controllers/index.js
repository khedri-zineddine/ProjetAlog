let { addSite, deleteSite, fetchSites } = require("./site.controller")
let { addDataTech, deleteDataTech, fetchDataTechs, findDataTech } = require("./dataTech.controller")
const { addSite } = require("./site.controller")

module.exports = {
    addSite, fetchSites, deleteSite, addDataTech, deleteDataTech, fetchDataTechs, findDataTech
}