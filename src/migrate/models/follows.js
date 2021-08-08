'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class follows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  follows.init({
    userId: DataTypes.INTEGER,
    fllowedUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'follows',
    underscored: true,
  });
  return follows;
};