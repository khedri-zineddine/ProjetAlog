'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('client_has_contacts', {
      idContactClient : {
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
      idContact: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'contacts'
          },
          key: 'idContact'
        },
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('client_has_contacts');
  }
};
