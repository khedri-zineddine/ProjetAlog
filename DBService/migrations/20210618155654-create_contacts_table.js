'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('contacts', {
      idContact : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      status: {type:Sequelize.DataTypes.BOOLEAN},
      sexe: {type:Sequelize.DataTypes.ENUM({values : ['MR','MME']})},
      firstName: {type:Sequelize.DataTypes.STRING},
      lastName: {type:Sequelize.DataTypes.STRING},
      email: {type:Sequelize.DataTypes.STRING,unique:true},
      phoneNumber: {type:Sequelize.DataTypes.STRING},
      mobile: {type:Sequelize.DataTypes.STRING},
      address: {type:Sequelize.DataTypes.STRING},
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contacts');
  }
};
