'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Members",{
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoincrement: true,
      primaryKey: true
    },
      name: Sequelize.STRING(250),
      status: Sequelize.STRING(50),

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
   });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("Members");
  }
};
