'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('employees', 'cpf',
      {
        type: Sequelize.STRING,
        allowNull: true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('employees', 'cpf');
  }
};
