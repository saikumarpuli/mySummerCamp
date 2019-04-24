'use strict';
module.exports = (sequelize, DataTypes) => {
  const trainingcourse = sequelize.define('trainingcourse', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    noOfDays: DataTypes.NUMBER,
    Coach: DataTypes.STRING,
    fee: DataTypes.NUMBER,
  }, {});
  trainingcourse.associate = function(models) {
    // associations can be defined here
    trainingcourse.hasMany(models.student,{
      foreignKey:'trainingcourse_id',
      as:'students'
    })
  };
  return trainingcourse;
};
