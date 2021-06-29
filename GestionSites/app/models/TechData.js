import { Sequelize, DataTypes,Model } from 'sequelize'

export class TechData extends Model {}
TechData.init({
  
}, {
  sequelize,
  tableName: 'sites'
});