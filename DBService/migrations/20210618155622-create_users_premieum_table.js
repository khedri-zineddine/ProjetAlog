'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_premieum', {
      idUserPremieum : {
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
      isPaid: {type:Sequelize.DataTypes.BOOLEAN,defaultValue:false},
      lastPayment: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW},
      email: {type:Sequelize.DataTypes.STRING,unique:true},
      updatedAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW},
      createdAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_premieum');
  }
};
