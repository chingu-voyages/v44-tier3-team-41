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
      countryCode: '001',
      phone: '1341908721',
      hashedPassword: bcrypt.hashSync('password'),
      classification: 'Mentee',
      city: 'New York',
      state: 'New York',
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
      countryCode: '001',
      phone: '2348217201',
      hashedPassword: bcrypt.hashSync('password1'),
      classification: 'Mentee',
      city: 'Whitehorse',
      state: 'Yukon Territory',
      country: 'Canada',
      profileImg: 'https://images.unsplash.com/photo-1626166292740-aa57374179e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      goal: 'Backend Engineer',
      about: 'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
      occupation: 'Teacher',
      skill: 'Python, Flask',
      project: 'E-commerce app',
      mentorId: '1',
    }, {
      name: 'Glori cornhill',
      email: 'gcornhill3@artisteer.com',
      countryCode: '001',
      phone: '7926193015',
      hashedPassword: bcrypt.hashSync('password2'),
      classification: 'Mentee',
      city: 'Madison',
      state: 'Wisconsin',
      country: 'United States',
      profileImg: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      goal: 'Frontend Engineer',
      about: 'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
      occupation: 'Retail',
      skill: 'TypeScript, Express, PostgreSQL',
      project: 'Image hosting app',
      mentorId: '20',
    }, {
      name: 'Mozelle Scandroot',
      email: 'mscandrootc@abc.net.au',
      countryCode: '001',
      phone: '4017221183',
      hashedPassword: bcrypt.hashSync('password3'),
      classification: 'Mentee',
      city: 'North Little Rock',
      state: 'Arkansas',
      country: 'United States',
      profileImg: 'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRvZyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
