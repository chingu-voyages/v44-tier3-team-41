'use strict';

const bcrypt = require('bcryptjs');

const options = {};
if (process.env.NODE_ENV === 'production') {
	options.schema = process.env.SCHEMA;
}
module.exports = {
	async up(queryInterface, Sequelize) {
		options.tableName = 'Mentees';
		return await queryInterface.bulkInsert(
			options,
			[
				{
					name: 'John Doe',
					email: 'john.doe@cgu.io',
					countryCode: '001',
					phone: '1341908721',
					hashedPassword: bcrypt.hashSync('password'),
					classification: 'Mentee',
					city: 'New York',
					state: 'New York',
					country: 'United States',
					profileImg:
						'https://images.unsplash.com/photo-1612213467906-20440d15bdb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ1fHxwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
					goal: 'Backend Engineer',
					about:
						'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
					occupation: 'Nurse Practicioner',
					skill: 'JavaScript, MongoDB',
					project: 'messaging app',
					mentorId: '1',
				},
				{
					name: 'Dag Denness',
					email: 'ddenness6@jigsy.com',
					countryCode: '001',
					phone: '2348217201',
					hashedPassword: bcrypt.hashSync('password1'),
					classification: 'Mentee',
					city: 'Whitehorse',
					state: 'Yukon Territory',
					country: 'Canada',
					profileImg:
						'https://images.unsplash.com/photo-1566930753949-fc3ef91faf3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU3fHxwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
					goal: 'Backend Engineer',
					about:
						'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
					occupation: 'Teacher',
					skill: 'Python, Flask',
					project: 'E-commerce app',
					mentorId: '1',
				},
				{
					name: 'Glori cornhill',
					email: 'gcornhill3@artisteer.com',
					countryCode: '001',
					phone: '7926193015',
					hashedPassword: bcrypt.hashSync('password2'),
					classification: 'Mentee',
					city: 'Madison',
					state: 'Wisconsin',
					country: 'United States',
					profileImg:
						'https://images.unsplash.com/photo-1524201373483-b95dee91cddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY4fHxwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
					goal: 'Frontend Engineer',
					about:
						'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
					occupation: 'Retail',
					skill: 'TypeScript, Express, PostgreSQL',
					project: 'Image hosting app',
					mentorId: '20',
				},
				{
					name: 'Mozelle Scandroot',
					email: 'mscandrootc@abc.net.au',
					countryCode: '001',
					phone: '4017221183',
					hashedPassword: bcrypt.hashSync('password3'),
					classification: 'Mentee',
					city: 'North Little Rock',
					state: 'Arkansas',
					country: 'United States',
					profileImg:
						'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
					goal: 'Full Stack Engineer',
					about:
						'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
					occupation: 'Recruiting Manager',
					skill: 'TypeScript, Express, PostgreSQL, React',
					project: 'Flash card app',
					mentorId: '12',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		options.tableName = 'Mentees';
		return await queryInterface.bulkDelete(options, {});
	},
};
