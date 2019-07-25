import models from '../../../models'
import Promise from 'bluebird'
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
export default class TrainingCourseDao {
  static getAll(pageData,limit,course){
    return new Promise((resolve,reject)=>{
      let page = pageData;      // page number
      let offset = limit * (page - 1);
      models.trainingcourse.findAndCountAll({
        where:{
          name: {[Op.iLike]: '%' + course + '%'}
          },
        limit: limit,
        offset: offset,
        order: [
          ['createdAt', 'DESC']
        ],
      }).then(result =>{
        resolve(result);
      }).catch(err =>{
        reject(err);
      });
    })
  }

  static createNew(request){
    return new Promise((resolve,reject)=>{
      console.log("dao");
      models.trainingcourse.create({name:request.name,description:request.description,duration:request.duration,noOfDays:request.noOfDays,
        Coach:request.Coach,fee:request.fee})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static getbyid(id){
    return new Promise((resolve,reject)=>{
      models.trainingcourse.findAll({where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static removebyid(id){
    return new Promise((resolve,reject)=>{
      models.trainingcourse.destroy({where: {id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static updatebyid(request,id){
    return new Promise((resolve,reject)=>{
      models.trainingcourse.update({name:request.name,description:request.description,duration:request.duration,noOfDays:request.noOfDays,
          Coach:request.Coach,fee:request.fee},
        {where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

}
