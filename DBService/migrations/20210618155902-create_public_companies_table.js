'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('public_companies', {
      idPublicCompany : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      idClient: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'clients'
          },
          key: 'idClient'
        },
        allowNull: false
      },
      typeCompany: {type:Sequelize.DataTypes.ENUM({values:['Epic','Syndicat','Commune']})},
      idRegion: {type:Sequelize.DataTypes.INTEGER},
      idDepartement: {type:Sequelize.DataTypes.INTEGER}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('public_companies');
  }
};
