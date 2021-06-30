import { Sequelize, DataTypes, Model } from 'sequelize'

export class User extends Model { }
User.init({
    idUser: {
<<<<<<< HEAD
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    firstName: { type: Sequelize.DataTypes.STRING },
    lastName: { type: Sequelize.DataTypes.STRING },
    userName: { type: Sequelize.DataTypes.STRING, unique: true },
    password: { type: Sequelize.DataTypes.STRING },
    typeUser: { type: Sequelize.DataTypes.ENUM({ values: ['admin', 'supAdmin', 'manager', 'userPrem', 'userSimple'] }) }
}, {
    sequelize,
    tableName: 'users'
});
=======
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
>>>>>>> de76e14d3a26e6c8b81b820b463ede634cf59bba
