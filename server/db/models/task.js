'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.Mentee, {
        foreignKey: 'menteeId',
      });
      Task.belongsTo(models.Mentor, {
        foreignKey: 'mentorId',
      });
    }
  }
  Task.init({
    mentorId: DataTypes.INTEGER,
    menteeId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    deadline: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
