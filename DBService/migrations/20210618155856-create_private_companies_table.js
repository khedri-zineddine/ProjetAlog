'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('private_companies', {
      idPrivateCompany : {
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
      groupe: {type:Sequelize.DataTypes.STRING},
      logoCompany: {type:Sequelize.DataTypes.STRING},
      address: {type:Sequelize.DataTypes.STRING},
      siteInternet: {type:Sequelize.DataTypes.STRING},
      phoneNumber: {type:Sequelize.DataTypes.STRING},
      nbSalarie: {type:Sequelize.DataTypes.STRING},
      updatedAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW},
      createdAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('private_companies');
  }
};
