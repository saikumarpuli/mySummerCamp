'use strict';
module.exports = (sequelize, DataTypes) => {
  const trainingcourse = sequelize.define('trainingcourse', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    noOfDays: DataTypes.NUMBER,
    Couch: DataTypes.STRING,
    fee: DataTypes.NUMBER,
    noOfStudents: DataTypes.NUMBER,
    timeslots: DataTypes.STRING,
    availableSlots: DataTypes.STRING
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
