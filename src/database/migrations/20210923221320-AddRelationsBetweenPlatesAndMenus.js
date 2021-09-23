'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('plates', 'menu_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'menus', key: 'id' }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropColumn('plates', 'menu_id')
  }
};
