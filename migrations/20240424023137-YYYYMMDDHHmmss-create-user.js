/**
 * Đây là một migration script để tạo bảng "Users" trong cơ sở dữ liệu.
 * Bảng "Users" chứa các trường như id, username, hash, firstName, lastName, createdAt, updatedAt.
 * Migration script này sử dụng Sequelize để tương tác với cơ sở dữ liệu.
 */

"use strict";

module.exports = {
  /**
   * Phương thức "up" được gọi khi migration script được chạy để tạo bảng "Users".
   * @param {Object} queryInterface - Đối tượng truy vấn cơ sở dữ liệu.
   * @param {Object} Sequelize - Đối tượng Sequelize để tạo các kiểu dữ liệu.
   * @returns {Promise<void>} - Promise không trả về giá trị.
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      hash: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  /**
   * Phương thức "down" được gọi khi migration script được chạy để xóa bảng "Users".
   * @param {Object} queryInterface - Đối tượng truy vấn cơ sở dữ liệu.
   * @param {Object} Sequelize - Đối tượng Sequelize để tạo các kiểu dữ liệu.
   * @returns {Promise<void>} - Promise không trả về giá trị.
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
