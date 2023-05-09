const {
  Model,
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
      Mentee.belongsTo(models.Mentor, {
        foreignKey: 'mentorId',
      });
      Mentee.hasMany(models.Message, {
        foreignKey: 'ownerMen',
        onDelete: 'CASCADE',
      });
      Mentee.hasMany(models.Channel, {
        foreignKey: 'menteeId',
      });
    }
  }
  Mentee.init({
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
    goal: DataTypes.STRING,
    about: DataTypes.STRING,
    occupation: DataTypes.STRING,
    projects: DataTypes.STRING,
    skills: DataTypes.STRING,
    mentorId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Mentee',
  });
  return Mentee;
};
