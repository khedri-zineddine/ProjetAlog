'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('contracts', {
      idContract : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      dateStart: {type:Sequelize.DataTypes.DATE},
      dateEnd: {type:Sequelize.DataTypes.DATE},
      activite: {type:Sequelize.DataTypes.STRING}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contracts');
  }
};
