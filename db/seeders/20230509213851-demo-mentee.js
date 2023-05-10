'use strict';

const bcrypt = require('bcryptjs');

const options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Mentees';
    return await queryInterface.bulkInsert(options, [{
      name: 'John Doe',
      email: 'john.doe@cgu.io',
      hashedPassword: bcrypt.hashSync('password'),
      city: 'New York',
      state: 'NY',
      country: 'United States',
      profileImg: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      goal: 'Backend Engineer',
      about: 'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
      occupation: 'Nurse Practicioner',
      skill: 'JavaScript, MongoDB',
      project: 'messaging app',
      mentorId: '1',
    }, {
      name: 'Dag Denness',
      email: 'ddenness6@jigsy.com',
      hashedPassword: bcrypt.hashSync('password1'),
      city: 'Whitehorse',
      state: 'Yukon Territory',
      country: 'Canada',
      profileImg: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      goal: 'Backend Engineer',
      about: 'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
      occupation: 'Teacher',
      skill: 'Python, Flask',
      project: 'E-commerce app',
      mentorId: '1',
    }, {
      name: 'Glori cornhill',
      email: 'gcornhill3@artisteer.com',
      hashedPassword: bcrypt.hashSync('password2'),
      city: 'Madison',
      state: 'Wisconsin',
      country: 'United States',
      profileImg: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      goal: 'Frontend Engineer',
      about: 'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
      occupation: 'Retail',
      skill: 'TypeScript, Express, PostgreSQL',
      project: 'Image hosting app',
      mentorId: '20',
    }, {
      name: 'Mozelle Scandroot',
      email: 'mscandrootc@abc.net.au',
      hashedPassword: bcrypt.hashSync('password3'),
      city: 'North Little Rock',
      state: 'Arkansas',
      country: 'United States',
      profileImg: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      goal: 'Full Stack Engineer',
      about: 'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
      occupation: 'Recruiting Manager',
      skill: 'TypeScript, Express, PostgreSQL, React',
      project: 'Flash card app',
      mentorId: '12',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Mentees';
    return await queryInterface.bulkDelete(options, {});
  }
};
