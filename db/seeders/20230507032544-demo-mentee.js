'use strict';
const bcrypt = require('bcryptjs');
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Mentees'
    return await queryInterface.bulkDelete(
      options, [{
        name: 'John Doe',
        email: 'john.doe@cgu.io', hashedPassword: bcrypt.hashSync('password'),
        city: 'New York',
        state: 'NY',
        country: 'United States', profileImg: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', goal: 'Frontend Developer', mentorId: '1',
      },]
    )
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Mentees'
    return await queryInterface.bulkDelete(
      options,
    )
  }
};
