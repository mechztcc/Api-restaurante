'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('restaurants', 'created_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropColumn('restaurants', 'created_at')
  }
};
