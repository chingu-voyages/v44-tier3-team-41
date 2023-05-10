'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Mentee, {
        foreignKey: 'ownerMen',
      });
      Message.belongsTo(models.Mentor, {
        foreignKey: 'ownerMon',
      });
      Message.belongsTo(models.Channel, {
        foreignKey: 'channelId'
      });
    }
  }
  Message.init({
    channelId: DataTypes.INTEGER,
    ownerMen: DataTypes.INTEGER,
    ownerMon: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
