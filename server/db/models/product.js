'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    decription: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Product;
};