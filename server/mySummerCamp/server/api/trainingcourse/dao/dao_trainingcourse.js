import models from '../../../models'
import Promise from 'bluebird'
export default class TrainingCourseDao {
  static getAll(){
    return new Promise((resolve,reject)=>{
      models.trainingcourse.findAll({})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
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
