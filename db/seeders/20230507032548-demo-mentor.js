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
      options, [
      {
        name: "Rutter Pemble",
        email: "mentor@gu.io",
        hashedPassword: bcrypt.hashSync("password"),
        city: "Austin",
        state: "Texas",
        country: "United States",
        profileImg: "http://dummyimage.com/187x100.png/ff4444/ffffff",
        yrsExp: 1,
        expertise: "JavaScript, HTML, CSS"
        , role: "Frontend developer"
      },
      {
        name: "Nata Videan",
        email: "nvidean1@smugmug.com",
        hashedPassword: bcrypt.hashSync("Videan"),
        city: "Lavaur",
        state: "Midi-Pyrénées",
        country: "France",
        profileImg: "http://dummyimage.com/140x100.png/cc0000/ffffff",
        yrsExp: 2,
        expertise: "React, Python, Flask, SQLAlchemy"
        , role: "Full-stack developer"
      },
      {
        name: "Hynda Lytton",
        email: "hlytton2@wired.com",
        hashedPassword: bcrypt.hashSync("Lytton"),
        city: "Miami",
        state: "Florida",
        country: "United States",
        profileImg: "http://dummyimage.com/116x100.png/cc0000/ffffff",
        yrsExp: 3,
        expertise: "JavaScript, Express, MongoDB"
        , role: "Full-stack developer"
      },
      {
        name: "Heindrick Belliveau",
        email: "hbelliveau3@mapy.cz",
        hashedPassword: bcrypt.hashSync("Belliveau"),
        city: "New York City",
        state: "New York",
        country: "United States",
        profileImg: "http://dummyimage.com/213x100.png/5fa2dd/ffffff",
        yrsExp: 4,
        expertise: "Python, Flask, SQLAlchemy",
        role: "Backend developer"
      },
      {
        name: "Jerri Babington",
        email: "jbabington4@wired.com",
        hashedPassword: bcrypt.hashSync("Babington"),
        city: "Philadelphia",
        state: "Pennsylvania",
        country: "United States",
        profileImg: "http://dummyimage.com/105x100.png/cc0000/ffffff",
        yrsExp: 5,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Dennet Rumbellow",
        email: "drumbellow5@yolasite.com",
        hashedPassword: bcrypt.hashSync("Rumbellow"),
        city: "Taifu",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/197x100.png/5fa2dd/ffffff",
        yrsExp: 6,
        expertise: "JavaScript, Express, MongoDB"
        , role: ""
      },
      {
        name: "Margeaux Heinel",
        email: "mheinel6@springer.com",
        hashedPassword: bcrypt.hashSync("Heinel"),
        city: "Peddie",
        state: null,
        country: "South Africa",
        profileImg: "http://dummyimage.com/219x100.png/dddddd/000000",
        yrsExp: 7,
        expertise: "JavaScript, HTML, CSS"
        , role: "Frontend developer"
      },
      {
        name: "Brenden Bucktrout",
        email: "bbucktrout7@forbes.com",
        hashedPassword: bcrypt.hashSync("Bucktrout"),
        city: "Xiagong",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/118x100.png/cc0000/ffffff",
        yrsExp: 8,
        expertise: "JavaScript, Express, MongoDB"
        , role: ""
      },
      {
        name: "Derek Windley",
        email: "dwindley8@com.com",
        hashedPassword: bcrypt.hashSync("Windley"),
        city: "Vanderbijlpark",
        state: null,
        country: "South Africa",
        profileImg: "http://dummyimage.com/213x100.png/cc0000/ffffff",
        yrsExp: 9,
        expertise: "JavaScript, Express, MongoDB"
        , role: ""
      },
      {
        name: "Kelsy Extence",
        email: "kextence9@surveymonkey.com",
        hashedPassword: bcrypt.hashSync("Extence"),
        city: "Sadar Bazar",
        state: "Uttar Pradesh",
        country: "India",
        profileImg: "http://dummyimage.com/221x100.png/cc0000/ffffff",
        yrsExp: 10,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Ora Hargraves",
        email: "ohargravesa@1688.com",
        hashedPassword: bcrypt.hashSync("Hargraves"),
        city: "Shangkuli",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/123x100.png/ff4444/ffffff",
        yrsExp: 11,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Regan Fery",
        email: "rferyb@pbs.org",
        hashedPassword: bcrypt.hashSync("Fery"),
        city: "Tulsa",
        state: "Oklahoma",
        country: "United States",
        profileImg: "http://dummyimage.com/140x100.png/5fa2dd/ffffff",
        yrsExp: 12,
        expertise: "React, Python, Flask, SQLAlchemy"
        , role: ""
      },
      {
        name: "Norah Casserly",
        email: "ncasserlyc@dell.com",
        hashedPassword: bcrypt.hashSync("Casserly"),
        city: "Yutan",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/236x100.png/dddddd/000000",
        yrsExp: 13,
        expertise: "JavaScript, Express, MongoDB"
        , role: ""
      },
      {
        name: "Andras Meindl",
        email: "ameindld@patch.com",
        hashedPassword: bcrypt.hashSync("Meindl"),
        city: "Hartford",
        state: "Connecticut",
        country: "United States",
        profileImg: "http://dummyimage.com/143x100.png/ff4444/ffffff",
        yrsExp: 14,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Charlotte Macknish",
        email: "cmacknishe@thetimes.co.uk",
        hashedPassword: bcrypt.hashSync("Macknish"),
        city: "Austin",
        state: "Texas",
        country: "United States",
        profileImg: "http://dummyimage.com/240x100.png/ff4444/ffffff",
        yrsExp: 15,
        expertise: "React, Python, Flask, SQLAlchemy"
        , role: ""
      },
      {
        name: "Alyss Romei",
        email: "aromeif@craigslist.org",
        hashedPassword: bcrypt.hashSync("Romei"),
        city: "Haoxinying",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/105x100.png/dddddd/000000",
        yrsExp: 16,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Merrill Stanmore",
        email: "mstanmoreg@imgur.com",
        hashedPassword: bcrypt.hashSync("Stanmore"),
        city: "Agraharam",
        state: "Andhra Pradesh",
        country: "India",
        profileImg: "http://dummyimage.com/128x100.png/ff4444/ffffff",
        yrsExp: 17,
        expertise: "React, Python, Flask, SQLAlchemy"
        , role: ""
      },
      {
        name: "Willy D'Ambrosi",
        email: "wdambrosih@cbsnews.com",
        hashedPassword: bcrypt.hashSync("D'Ambrosi"),
        city: "Camden",
        state: "New Jersey",
        country: "United States",
        profileImg: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
        yrsExp: 18,
        expertise: "JavaScript, Express, MongoDB"
        , role: ""
      },
      {
        name: "Bartholemy Garlic",
        email: "bgarlici@fda.gov",
        hashedPassword: bcrypt.hashSync("Garlic"),
        city: "Kongkeshu",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/151x100.png/dddddd/000000",
        yrsExp: 19,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Nicholle Brigman",
        email: "nbrigmanj@umn.edu",
        hashedPassword: bcrypt.hashSync("Brigman"),
        city: "Memphis",
        state: "Tennessee",
        country: "United States",
        profileImg: "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
        yrsExp: 20,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Adolf Lingwood",
        email: "alingwoodk@phpbb.com",
        hashedPassword: bcrypt.hashSync("Lingwood"),
        city: "Xinglong",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/169x100.png/dddddd/000000",
        yrsExp: 21,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Jeth Mioni",
        email: "jmionil@photobucket.com",
        hashedPassword: bcrypt.hashSync("Mioni"),
        city: "Jefferson City",
        state: "Missouri",
        country: "United States",
        profileImg: "http://dummyimage.com/173x100.png/cc0000/ffffff",
        yrsExp: 22,
        expertise: "React, Python, Flask, SQLAlchemy"
        , role: ""
      },
      {
        name: "Natassia Garrett",
        email: "ngarrettm@nih.gov",
        hashedPassword: bcrypt.hashSync("Garrett"),
        city: "Memphis",
        state: "Tennessee",
        country: "United States",
        profileImg: "http://dummyimage.com/113x100.png/cc0000/ffffff",
        yrsExp: 23,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Manuel Harrod",
        email: "mharrodn@ibm.com",
        hashedPassword: bcrypt.hashSync("Harrod"),
        city: "Milton",
        state: "Scotland",
        country: "United Kingdom",
        profileImg: "http://dummyimage.com/226x100.png/5fa2dd/ffffff",
        yrsExp: 24,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Gabriello Bessell",
        email: "gbessello@domainmarket.com",
        hashedPassword: bcrypt.hashSync("Bessell"),
        city: "Colorado Springs",
        state: "Colorado",
        country: "United States",
        profileImg: "http://dummyimage.com/168x100.png/5fa2dd/ffffff",
        yrsExp: 25,
        expertise: "JavaScript, Express, MongoDB"
        , role: ""
      },
      {
        name: "Waverly McGuiness",
        email: "wmcguinessp@netlog.com",
        hashedPassword: bcrypt.hashSync("McGuiness"),
        city: "Tucson",
        state: "Arizona",
        country: "United States",
        profileImg: "http://dummyimage.com/102x100.png/ff4444/ffffff",
        yrsExp: 26,
        expertise: "React, Python, Flask, SQLAlchemy"
        , role: ""
      },
      {
        name: "Pollyanna Leaman",
        email: "pleamanq@webs.com",
        hashedPassword: bcrypt.hashSync("Leaman"),
        city: "Xinkaikou",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/208x100.png/ff4444/ffffff",
        yrsExp: 27,
        expertise: "Java, Python, React, Angular, PostgreSQL"
        , role: ""
      },
      {
        name: "Dylan Laurenz",
        email: "dlaurenzr@edublogs.org",
        hashedPassword: bcrypt.hashSync("Laurenz"),
        city: "Columbia",
        state: "South Carolina",
        country: "United States",
        profileImg: "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
        yrsExp: 28,
        expertise: "JavaScript, Express, MongoDB"
        , role: ""
      },
      {
        name: "Deena Lackney",
        email: "dlackneys@facebook.com",
        hashedPassword: bcrypt.hashSync("Lackney"),
        city: "Qincheng",
        state: null,
        country: "China",
        profileImg: "http://dummyimage.com/114x100.png/5fa2dd/ffffff",
        yrsExp: 29,
        expertise: "React, Python, Flask, SQLAlchemy"
        , role: ""
      },
      {
        name: "Ossie Innman",
        email: "oinnmant@stumbleupon.com",
        hashedPassword: bcrypt.hashSync("Innman"),
        city: "Rochester",
        state: "New York",
        country: "United States",
        profileImg: "http://dummyimage.com/210x100.png/dddddd/000000",
        yrsExp: 30,
        expertise: "JavaScript, Express, MongoDB"
        , role: ""
      }
    ]

    )
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Mentors'
    return await queryInterface.bulkDelete(
      options,
    )
  }
};
