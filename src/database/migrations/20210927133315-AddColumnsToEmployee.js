'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('employees', 'phone',
    {
      type: Sequelize.STRING,
      allowNull: true,
    }
  );

  await queryInterface.addColumn('employees', 'pix',
      {
        type: Sequelize.STRING,
        allowNull: true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('employees', 'phone');
    await queryInterface.removeColumn('employees', 'pix');
  }
};
