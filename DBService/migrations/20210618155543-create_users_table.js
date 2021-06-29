'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('users', {
      idUser : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unique : true
      },
      firstName: {type:Sequelize.DataTypes.STRING},
      lastName: {type:Sequelize.DataTypes.STRING},
      userName: {type:Sequelize.DataTypes.STRING,unique:true},
      password: {type:Sequelize.DataTypes.STRING},
      typeUser: {type:Sequelize.DataTypes.ENUM({values : ['admin','supAdmin','manager','userPrem','userSimple']})},
      updatedAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW},
      createdAt: {type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
