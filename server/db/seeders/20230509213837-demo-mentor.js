'use strict';

const bcrypt = require('bcryptjs');

const options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Mentors';
    return await queryInterface.bulkInsert(options, [
      {
        name: 'Rutter Pemble',
        email: 'mentor@gu.io',
        countryCode: '001',
        phone: '2341938721',
        hashedPassword: bcrypt.hashSync('password'),
        classification: 'Mentor',
        city: 'Austin',
        state: 'Texas',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1612625690678-1348d3c167a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 1,
        expertise: 'JavaScript, HTML, CSS',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Doodle'
      },
      {
        name: 'Nata Videan',
        email: 'nvidean1@smugmug.com',
        countryCode: '033',
        phone: '1341208421',
        hashedPassword: bcrypt.hashSync('Videan'),
        classification: 'Mentor',
        city: 'Lavaur',
        state: 'Midi-Pyrénées',
        country: 'France',
        profileImg: 'https://images.unsplash.com/photo-1571754023245-3685fd50b20f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 2,
        expertise: 'React, Python, Flask, SQLAlchemy',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Skills LLC'
      },
      {
        name: 'Hynda Lytton',
        email: 'hlytton2@wired.com',
        countryCode: '001',
        phone: '8341908721',
        hashedPassword: bcrypt.hashSync('Lytton'),
        classification: 'Mentor',
        city: 'Miami',
        state: 'Florida',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1519990342348-0fe79946701f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 3,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dach Group'
      },
      {
        name: 'Heindrick Belliveau',
        email: 'hbelliveau3@mapy.cz',
        countryCode: '001',
        phone: '5345909721',
        hashedPassword: bcrypt.hashSync('Belliveau'),
        classification: 'Mentor',
        city: 'New York City',
        state: 'New York',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1588942173353-0c53a1bf9081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 4,
        expertise: 'Python, Flask, SQLAlchemy',
        role: 'Backend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dach Group'
      },
      {
        name: 'Jerri Babington',
        email: 'jbabington4@wired.com',
        countryCode: '001',
        phone: '2151908721',
        hashedPassword: bcrypt.hashSync('Babington'),
        classification: 'Mentor',
        city: 'Philadelphia',
        state: 'Pennsylvania',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1588442025058-dffe84001858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 5,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Emard, Barrows and Rohan'
      },
      {
        name: 'Dennet Rumbellow',
        email: 'drumbellow5@yolasite.com',
        countryCode: '086',
        phone: '3341979221',
        hashedPassword: bcrypt.hashSync('Rumbellow'),
        classification: 'Mentor',
        city: 'Taifu',
        state: null,
        country: 'China',
        profileImg: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 6,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Backend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Bins Inc'
      },
      {
        name: 'Margeaux Heinel',
        email: 'mheinel6@springer.com',
        countryCode: '027',
        phone: '7771908721',
        hashedPassword: bcrypt.hashSync('Heinel'),
        classification: 'Mentor',
        city: 'Peddie',
        state: null,
        country: 'South Africa',
        profileImg: 'https://images.unsplash.com/photo-1599475504246-11c1217748c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 7,
        expertise: 'JavaScript, HTML, CSS',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Emard, Barrows and Rohan'
      },
      {
        name: 'Brenden Bucktrout',
        email: 'bbucktrout7@forbes.com',
        countryCode: '086',
        phone: '4191308721',
        hashedPassword: bcrypt.hashSync('Bucktrout'),
        classification: 'Mentor',
        city: 'Xiagong',
        state: null,
        country: 'China',
        profileImg: 'https://images.unsplash.com/photo-1596167857648-1149b2284089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 8,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Doodle'
      },
      {
        name: 'Derek Windley',
        email: 'dwindley8@com.com',
        countryCode: '027',
        phone: '1341908721',
        hashedPassword: bcrypt.hashSync('Windley'),
        classification: 'Mentor',
        city: 'Vanderbijlpark',
        state: null,
        country: 'South Africa',
        profileImg: 'https://images.unsplash.com/photo-1597658108401-18f93bca4bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 9,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Bins Inc'
      },
      {
        name: 'Kelsy Extence',
        email: 'kextence9@surveymonkey.com',
        countryCode: '091',
        phone: '9081341721',
        hashedPassword: bcrypt.hashSync('Extence'),
        classification: 'Mentor',
        city: 'Sadar Bazar',
        state: 'Uttar Pradesh',
        country: 'India',
        profileImg: 'https://images.unsplash.com/photo-1544984827-874b3369a904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 10,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Emard, Barrows and Rohan'
      },
      {
        name: 'Ora Hargraves',
        email: 'ohargravesa@1688.com',
        countryCode: '086',
        phone: '9831908721',
        hashedPassword: bcrypt.hashSync('Hargraves'),
        classification: 'Mentor',
        city: 'Shangkuli',
        state: null,
        country: 'China',
        profileImg: 'https://images.unsplash.com/photo-1470742292565-de43c4b02b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 11,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dach Group'
      },
      {
        name: 'Regan Fery',
        email: 'rferyb@pbs.org',
        countryCode: '001',
        phone: '8411908721',
        hashedPassword: bcrypt.hashSync('Fery'),
        classification: 'Mentor',
        city: 'Tulsa',
        state: 'Oklahoma',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1602614052115-95ab82d401b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 12,
        expertise: 'React, Python, Flask, SQLAlchemy',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Doodle'
      },
      {
        name: 'Norah Casserly',
        email: 'ncasserlyc@dell.com',
        countryCode: '086',
        phone: '3419018721',
        hashedPassword: bcrypt.hashSync('Casserly'),
        classification: 'Mentor',
        city: 'Yutan',
        state: null,
        country: 'China',
        profileImg: 'https://images.unsplash.com/photo-1597119609284-c38e1a4d2221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 13,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Backend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Skills LLC'
      },
      {
        name: 'Andras Meindl',
        email: 'ameindld@patch.com',
        countryCode: '001',
        phone: '6741908721',
        hashedPassword: bcrypt.hashSync('Meindl'),
        classification: 'Mentor',
        city: 'Hartford',
        state: 'Connecticut',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1467302091917-c7ac18f83832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 14,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dream Job'
      },
      {
        name: 'Charlotte Macknish',
        email: 'cmacknishe@thetimes.co.uk',
        countryCode: '001',
        phone: '4921908721',
        hashedPassword: bcrypt.hashSync('Macknish'),
        classification: 'Mentor',
        city: 'Austin',
        state: 'Texas',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1553112295-4e7646a96859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 15,
        expertise: 'React, Python, Flask, SQLAlchemy',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Doodle'
      },
      {
        name: 'Alyss Romei',
        email: 'aromeif@craigslist.org',
        countryCode: '086',
        phone: '3012908721',
        hashedPassword: bcrypt.hashSync('Romei'),
        classification: 'Mentor',
        city: 'Haoxinying',
        state: null,
        country: 'China',
        profileImg: 'https://images.unsplash.com/photo-1586582637679-deb3489d68c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 16,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dream Job'
      },
      {
        name: 'Merrill Stanmore',
        email: 'mstanmoreg@imgur.com',
        countryCode: '001',
        phone: '9910208721',
        hashedPassword: bcrypt.hashSync('Stanmore'),
        classification: 'Mentor',
        city: 'Agraharam',
        state: 'Andhra Pradesh',
        country: 'India',
        profileImg: 'https://images.unsplash.com/photo-1612420002420-c3510d1bb0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 17,
        expertise: 'React, Python, Flask, SQLAlchemy',
        role: 'Backend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Skills LLC'
      },
      {
        name: "Willy D'Ambrosi",
        email: 'wdambrosih@cbsnews.com',
        countryCode: '001',
        phone: '4471908721',
        hashedPassword: bcrypt.hashSync("D'Ambrosi"),
        classification: 'Mentor',
        city: 'Camden',
        state: 'New Jersey',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1592893658769-5da16cb93236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 18,
        expertise: 'JavaScript, Express, MongoDB, React',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Emard, Barrows and Rohan'
      },
      {
        name: 'Bartholemy Garlic',
        email: 'bgarlici@fda.gov',
        countryCode: '086',
        phone: '1908721134',
        hashedPassword: bcrypt.hashSync('Garlic'),
        classification: 'Mentor',
        city: 'Kongkeshu',
        state: null,
        country: 'China',
        profileImg: 'https://plus.unsplash.com/premium_photo-1669725687152-498e152687ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 19,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Upton Group'
      },
      {
        name: 'Nicholle Brigman',
        email: 'nbrigmanj@umn.edu',
        countryCode: '001',
        phone: '8721341901',
        hashedPassword: bcrypt.hashSync('Brigman'),
        classification: 'Mentor',
        city: 'Memphis',
        state: 'Tennessee',
        country: 'United States',
        profileImg: 'https://images.unsplash.com/photo-1582949663569-4ae9faa3d4b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxtYW1tYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        yrsExp: 20,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Upton Group'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Mentors';
    return await queryInterface.bulkDelete(options, {});
  }
};
