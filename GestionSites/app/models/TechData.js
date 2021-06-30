import { Sequelize, DataTypes, Model } from 'sequelize'

export class TechData extends Model { }
TechData.init({
  idTechData: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  idSite: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: {
        tableName: 'sites'
      },
      key: 'idSite'
    },
    allowNull: false
  },
  typeDechetAccept: { type: Sequelize.DataTypes.STRING },
  technologie: { type: Sequelize.DataTypes.STRING },
  quantiteRefus: { type: Sequelize.DataTypes.STRING },
  csrProduit: { type: Sequelize.DataTypes.STRING },
  tonnageAnnule: { type: Sequelize.DataTypes.STRING },
  capaciteNominal: { type: Sequelize.DataTypes.STRING },
  dernierConstructeur: { type: Sequelize.DataTypes.STRING },
  valorisationEnergitique: { type: Sequelize.DataTypes.STRING }
}, {
  sequelize,
  tableName: 'tech_datas'
});