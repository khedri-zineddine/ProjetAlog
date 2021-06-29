'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('shares', {
      idShare : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      startShareDate: {type:Sequelize.DataTypes.DATE},
      endShareDate: {type:Sequelize.DataTypes.DATE},
      isSuspensed: {type:Sequelize.DataTypes.BOOLEAN},
      typeDataShared: {type:Sequelize.DataTypes.ENUM({values:['site','region','departement']})},
      idDataShared:{type:Sequelize.DataTypes.INTEGER},
      updatedAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW},
      createdAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shares');
  }
};
