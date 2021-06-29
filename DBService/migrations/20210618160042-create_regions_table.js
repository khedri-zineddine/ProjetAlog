'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('regions', {
      idRegion : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      nomRegion:{type:Sequelize.DataTypes.STRING},
      codeRegion:{type:Sequelize.DataTypes.STRING}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('regions');
  }
};
