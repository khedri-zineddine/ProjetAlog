'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tech_datas', {
      idTechData : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
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
      typeDechetAccept:{type:Sequelize.DataTypes.STRING},
      technologie:{type:Sequelize.DataTypes.STRING},
      quantiteRefus:{type:Sequelize.DataTypes.STRING},
      csrProduit:{type:Sequelize.DataTypes.STRING},
      tonnageAnnule:{type:Sequelize.DataTypes.STRING},
      capaciteNominal:{type:Sequelize.DataTypes.STRING},
      dernierConstructeur:{type:Sequelize.DataTypes.STRING},
      valorisationEnergitique:{type:Sequelize.DataTypes.STRING}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tech_datas');
  }
};
