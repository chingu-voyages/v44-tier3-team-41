'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class Mentee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mentee.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    profile_img: DataTypes.STRING,
    goal: DataTypes.STRING,
    mentorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mentee',
  });
  return Mentee;
};
