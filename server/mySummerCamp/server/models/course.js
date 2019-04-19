'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    noOfDays: DataTypes.INTEGER,
    Couch: DataTypes.STRING,
    fee: DataTypes.INTEGER,
    timeslots: DataTypes.STRING,
    noOfStudents: DataTypes.INTEGER,
    availableSlots: DataTypes.STRING
  }, {});
  course.associate = function(models) {
    // associations can be defined here

    course.hasMany(models.student,{
      foreignkey:'course_id',
      as:'courses'
    })
  };
  return course;
};
