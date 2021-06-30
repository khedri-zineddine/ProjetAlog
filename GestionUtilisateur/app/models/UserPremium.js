import { Sequelize, DataTypes, Model } from 'sequelize'

export class UserPremium extends Model { }
UserPremium.init({
    idUserPremieum: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
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
    isPaid: { type: Sequelize.DataTypes.BOOLEAN, defaultValue: false },
    lastPayment: { type: Sequelize.DataTypes.DATE, defaultValue: Sequelize.NOW },
    email: { type: Sequelize.DataTypes.STRING, unique: true }
}, {
    sequelize,
    tableName: 'users_premium'
});