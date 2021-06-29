'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('sites', {
      idSite : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      category:{type:Sequelize.DataTypes.STRING},
      siteInternet:{type:Sequelize.DataTypes.STRING},
      address:{type:Sequelize.DataTypes.STRING},
      createYear:{type:Sequelize.DataTypes.STRING},
      phoneSite:{type:Sequelize.DataTypes.STRING},
      photoSite:{type:Sequelize.DataTypes.STRING},
      updatedAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW},
      createdAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sites');
  }
};
