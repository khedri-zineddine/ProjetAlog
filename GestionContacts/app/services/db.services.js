import { Sequelize } from 'sequelize'
const dbConfig = require("../../ormconfig.json")
const NODE_ENV = process.env.NODE_ENV
export const createConnection = async () => {
    var sequelize = new Sequelize(dbConfig[NODE_ENV]);
    global.sequelize = sequelize;
}
