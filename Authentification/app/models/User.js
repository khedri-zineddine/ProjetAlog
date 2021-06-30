import { Sequelize, DataTypes,Model } from 'sequelize'

export class User extends Model {}
User.init({
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey:true
      },
      firstName:{
          type:DataTypes.STRING
      },
      lastName:{
          type:DataTypes.STRING
      },
      userName:{
          type:DataTypes.STRING
      },
      password:{
          type:DataTypes.STRING
      },
      typeUser:{
          type:DataTypes.ENUM({values : ['admin','supAdmin','manager','userPrem','userSimple']})
      },
      updatedAt: {
          type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW
      },
      createdAt: {
          type:Sequelize.DataTypes.DATE,defaultValue:Sequelize.NOW
      }
    }, {
      sequelize,
      tableName: 'users'
    });