'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('communes', {
      idCommune : {
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
      nomCommune: {type:Sequelize.DataTypes.STRING},
      codeCommune: {type:Sequelize.DataTypes.STRING},
      nbPeople: {type:Sequelize.DataTypes.STRING},
      logo: {type:Sequelize.DataTypes.STRING},
      updatedAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW},
      createdAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('communes');
  }
};
