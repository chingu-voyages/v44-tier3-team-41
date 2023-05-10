'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Channel.belongsTo(models.Mentee, {
        foreignKey: 'menteeId',
      });
      Channel.belongsTo(models.Mentor, {
        foreignKey: 'mentorId',
      });
      Channel.belongsTo(models.Message, {
        foreignKey: 'channelId'
      });
    }
  }
  Channel.init({
    mentorId: DataTypes.INTEGER,
    menteeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};
