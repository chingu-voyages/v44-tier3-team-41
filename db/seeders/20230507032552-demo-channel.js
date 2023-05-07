'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Channels'
    return await queryInterface.bulkDelete(
      options, [{},]
    )
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Channels'
    return await queryInterface.bulkDelete(
      options,
    )
  }
};
