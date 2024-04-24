"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: Math.floor(Math.random() * 1000),
          username: "admin",
          hash: "$2a$10$K2ugLVU.CvypM2KGcrVnHe1iCCTYEY061Q9WfEdUHvxfDdWjseWRe",
          firstName: "Administrator",
          lastName: "(AD)",
          createdAt: new Date("2024-04-24T02:55:58"),
          updatedAt: new Date("2024-04-24T02:55:58"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
