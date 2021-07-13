'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class murmurs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  murmurs.init({
    text: DataTypes.STRING,
    postUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'murmurs',
  });
  return murmurs;
};