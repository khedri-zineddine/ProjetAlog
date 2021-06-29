'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('epics', {
      idEpic : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      idPublicCompany: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'public_companies'
          },
          key: 'idPublicCompany'
        },
        allowNull: false
      },
      nomEpic: {type:Sequelize.DataTypes.STRING},
      codeEpic: {type:Sequelize.DataTypes.STRING},
      address: {type:Sequelize.DataTypes.STRING},
      siteInternet: {type:Sequelize.DataTypes.STRING},
      phoneNumber: {type:Sequelize.DataTypes.STRING},
      nbPeople: {type:Sequelize.DataTypes.STRING},
      logo: {type:Sequelize.DataTypes.STRING}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('epics');
  }
};
