'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mentor.hasMany(models.Mentee, {
        foreignKey: 'mentorId'
      });
      Mentor.hasMany(models.Message, {
        foreignKey: 'ownerMon',
        onDelete: 'CASCADE',
      });
      Mentor.hasMany(models.Channel, {
        foreignKey: 'mentorId',
      });
      Mentor.hasMany(models.Task, {
        foreignKey: 'mentorId',
      });
    }
  }
  Mentor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 40],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 300],
        isEmail: true,
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60],
      },
    },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    profileImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yrsExp: DataTypes.INTEGER,
    expertise: DataTypes.STRING,
    role: DataTypes.STRING,
    about: DataTypes.STRING,
    company: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};