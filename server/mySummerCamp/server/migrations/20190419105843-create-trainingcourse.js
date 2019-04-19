'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trainingcourses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      noOfDays: {
        type: Sequelize.INTEGER
      },
      Couch: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.INTEGER
      },
      timeslots: {
        type: Sequelize.STRING
      },
      noOfStudents: {
        type: Sequelize.INTEGER
      },
      availableSlots: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trainingcourses');
  }
};
