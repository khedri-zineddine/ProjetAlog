import {  DataTypes, Model } from 'sequelize'
export class Site extends Model {}
Site.init({
  idSite: {
    type: DataTypes.INTEGER,
    primaryKey:true
  },
  category:{
      type:DataTypes.STRING
  },
  siteInternet:{
      type:DataTypes.STRING
  },
  address:{
      type:DataTypes.STRING
  },
  phoneSite:{
      type:DataTypes.STRING
  },
  photoSite:{
      type:DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'sites'
});