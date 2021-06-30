import { Sequelize, DataTypes, Model } from 'sequelize'

export class User extends Model { }
User.init({
    idUser: {
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
