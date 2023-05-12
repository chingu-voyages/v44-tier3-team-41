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
        hashedPassword: bcrypt.hashSync('password'),
        city: 'Austin',
        state: 'Texas',
        country: 'United States',
        profileImg: 'http://dummyimage.com/187x100.png/ff4444/ffffff',
        yrsExp: 1,
        expertise: 'JavaScript, HTML, CSS',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Doodle'
      },
      {
        name: 'Nata Videan',
        email: 'nvidean1@smugmug.com',
        hashedPassword: bcrypt.hashSync('Videan'),
        city: 'Lavaur',
        state: 'Midi-Pyrénées',
        country: 'France',
        profileImg: 'http://dummyimage.com/140x100.png/cc0000/ffffff',
        yrsExp: 2,
        expertise: 'React, Python, Flask, SQLAlchemy',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Skills LLC'
      },
      {
        name: 'Hynda Lytton',
        email: 'hlytton2@wired.com',
        hashedPassword: bcrypt.hashSync('Lytton'),
        city: 'Miami',
        state: 'Florida',
        country: 'United States',
        profileImg: 'http://dummyimage.com/116x100.png/cc0000/ffffff',
        yrsExp: 3,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dach Group'
      },
      {
        name: 'Heindrick Belliveau',
        email: 'hbelliveau3@mapy.cz',
        hashedPassword: bcrypt.hashSync('Belliveau'),
        city: 'New York City',
        state: 'New York',
        country: 'United States',
        profileImg: 'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
        yrsExp: 4,
        expertise: 'Python, Flask, SQLAlchemy',
        role: 'Backend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dach Group'
      },
      {
        name: 'Jerri Babington',
        email: 'jbabington4@wired.com',
        hashedPassword: bcrypt.hashSync('Babington'),
        city: 'Philadelphia',
        state: 'Pennsylvania',
        country: 'United States',
        profileImg: 'http://dummyimage.com/105x100.png/cc0000/ffffff',
        yrsExp: 5,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Emard, Barrows and Rohan'
      },
      {
        name: 'Dennet Rumbellow',
        email: 'drumbellow5@yolasite.com',
        hashedPassword: bcrypt.hashSync('Rumbellow'),
        city: 'Taifu',
        state: null,
        country: 'China',
        profileImg: 'http://dummyimage.com/197x100.png/5fa2dd/ffffff',
        yrsExp: 6,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Backend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Bins Inc'
      },
      {
        name: 'Margeaux Heinel',
        email: 'mheinel6@springer.com',
        hashedPassword: bcrypt.hashSync('Heinel'),
        city: 'Peddie',
        state: null,
        country: 'South Africa',
        profileImg: 'http://dummyimage.com/219x100.png/dddddd/000000',
        yrsExp: 7,
        expertise: 'JavaScript, HTML, CSS',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Emard, Barrows and Rohan'
      },
      {
        name: 'Brenden Bucktrout',
        email: 'bbucktrout7@forbes.com',
        hashedPassword: bcrypt.hashSync('Bucktrout'),
        city: 'Xiagong',
        state: null,
        country: 'China',
        profileImg: 'http://dummyimage.com/118x100.png/cc0000/ffffff',
        yrsExp: 8,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Doodle'
      },
      {
        name: 'Derek Windley',
        email: 'dwindley8@com.com',
        hashedPassword: bcrypt.hashSync('Windley'),
        city: 'Vanderbijlpark',
        state: null,
        country: 'South Africa',
        profileImg: 'http://dummyimage.com/213x100.png/cc0000/ffffff',
        yrsExp: 9,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Bins Inc'
      },
      {
        name: 'Kelsy Extence',
        email: 'kextence9@surveymonkey.com',
        hashedPassword: bcrypt.hashSync('Extence'),
        city: 'Sadar Bazar',
        state: 'Uttar Pradesh',
        country: 'India',
        profileImg: 'http://dummyimage.com/221x100.png/cc0000/ffffff',
        yrsExp: 10,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Emard, Barrows and Rohan'
      },
      {
        name: 'Ora Hargraves',
        email: 'ohargravesa@1688.com',
        hashedPassword: bcrypt.hashSync('Hargraves'),
        city: 'Shangkuli',
        state: null,
        country: 'China',
        profileImg: 'http://dummyimage.com/123x100.png/ff4444/ffffff',
        yrsExp: 11,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dach Group'
      },
      {
        name: 'Regan Fery',
        email: 'rferyb@pbs.org',
        hashedPassword: bcrypt.hashSync('Fery'),
        city: 'Tulsa',
        state: 'Oklahoma',
        country: 'United States',
        profileImg: 'http://dummyimage.com/140x100.png/5fa2dd/ffffff',
        yrsExp: 12,
        expertise: 'React, Python, Flask, SQLAlchemy',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Doodle'
      },
      {
        name: 'Norah Casserly',
        email: 'ncasserlyc@dell.com',
        hashedPassword: bcrypt.hashSync('Casserly'),
        city: 'Yutan',
        state: null,
        country: 'China',
        profileImg: 'http://dummyimage.com/236x100.png/dddddd/000000',
        yrsExp: 13,
        expertise: 'JavaScript, Express, MongoDB',
        role: 'Backend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Skills LLC'
      },
      {
        name: 'Andras Meindl',
        email: 'ameindld@patch.com',
        hashedPassword: bcrypt.hashSync('Meindl'),
        city: 'Hartford',
        state: 'Connecticut',
        country: 'United States',
        profileImg: 'http://dummyimage.com/143x100.png/ff4444/ffffff',
        yrsExp: 14,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dream Job'
      },
      {
        name: 'Charlotte Macknish',
        email: 'cmacknishe@thetimes.co.uk',
        hashedPassword: bcrypt.hashSync('Macknish'),
        city: 'Austin',
        state: 'Texas',
        country: 'United States',
        profileImg: 'http://dummyimage.com/240x100.png/ff4444/ffffff',
        yrsExp: 15,
        expertise: 'React, Python, Flask, SQLAlchemy',
        role: 'Full Stack Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Doodle'
      },
      {
        name: 'Alyss Romei',
        email: 'aromeif@craigslist.org',
        hashedPassword: bcrypt.hashSync('Romei'),
        city: 'Haoxinying',
        state: null,
        country: 'China',
        profileImg: 'http://dummyimage.com/105x100.png/dddddd/000000',
        yrsExp: 16,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Dream Job'
      },
      {
        name: 'Merrill Stanmore',
        email: 'mstanmoreg@imgur.com',
        hashedPassword: bcrypt.hashSync('Stanmore'),
        city: 'Agraharam',
        state: 'Andhra Pradesh',
        country: 'India',
        profileImg: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
        yrsExp: 17,
        expertise: 'React, Python, Flask, SQLAlchemy',
        role: 'Backend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Skills LLC'
      },
      {
        name: "Willy D'Ambrosi",
        email: 'wdambrosih@cbsnews.com',
        hashedPassword: bcrypt.hashSync("D'Ambrosi"),
        city: 'Camden',
        state: 'New Jersey',
        country: 'United States',
        profileImg: 'http://dummyimage.com/116x100.png/5fa2dd/ffffff',
        yrsExp: 18,
        expertise: 'JavaScript, Express, MongoDB, React',
        role: 'Frontend Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Emard, Barrows and Rohan'
      },
      {
        name: 'Bartholemy Garlic',
        email: 'bgarlici@fda.gov',
        hashedPassword: bcrypt.hashSync('Garlic'),
        city: 'Kongkeshu',
        state: null,
        country: 'China',
        profileImg: 'http://dummyimage.com/151x100.png/dddddd/000000',
        yrsExp: 19,
        expertise: 'Java, Python, React, Angular, PostgreSQL',
        role: 'DevOps Engineer',
        about: 'Excited about the future of Software Engineering, and i would love to do my part to push it forward',
        company: 'Upton Group'
      },
      {
        name: 'Nicholle Brigman',
        email: 'nbrigmanj@umn.edu',
        hashedPassword: bcrypt.hashSync('Brigman'),
        city: 'Memphis',
        state: 'Tennessee',
        country: 'United States',
        profileImg: 'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
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
