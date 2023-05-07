'use strict';
const bcrypt = require('bcryptjs');
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Mentors'
    return await queryInterface.bulkDelete(
      options, [{},]
    )
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Mentors'
    return await queryInterface.bulkDelete(
      options,
    )
  }
};
