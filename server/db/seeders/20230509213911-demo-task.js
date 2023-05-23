'use strict';

const options = {};
if (process.env.NODE_ENV === 'production') {
	options.schema = process.env.SCHEMA;
}
module.exports = {
	async up(queryInterface, Sequelize) {},

	async down(queryInterface, Sequelize) {
		options.tableName = 'Tasks';
		return await queryInterface.bulkDelete(options, {});
	},
};
