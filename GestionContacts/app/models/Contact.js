import { Sequelize, DataTypes, Model, INTEGER, BOOLEAN } from 'sequelize'

export class Contact extends Model { }
Contact.init({
    idContact: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: { type: DataTypes.BOOLEAN, defaultValue: true },
    sexe: { type: DataTypes.ENUM({ values: ['MR', 'MME'] }) },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    phoneNumber: { type: DataTypes.STRING },
    mobile: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
}, {
    sequelize,
    tableName: 'contacts'

});