// import important parts of sequelize library
const { Model, DataTypes, Sequelize } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      validate: true

    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: true,
      defaultValue: 10

    },
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Category',
        key: 'id'

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
