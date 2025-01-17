// /migrations/000000-fix-db-charset.js

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `ALTER DATABASE ${
        queryInterface.sequelize.config.database
      } CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;`
    );
  },

  down: (queryInterface, Sequelize) => {}
};