'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('menus', 'restaurant_id', 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'restaurants', key: 'id' },
        onDelete: 'CASCADE'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('menus', 'restaurant_id');
  }
};
