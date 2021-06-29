'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('admins', {
      idAdmin : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      idUser: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'idUser'
        },
        allowNull: false
      },
      email: {type:Sequelize.DataTypes.STRING,unique:true},
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('admins');
  }
};
