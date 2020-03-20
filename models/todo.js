'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Todo extends Model {
  }

  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};