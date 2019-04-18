import models from '../../../models'
import Promise from 'bluebird'
export default class CourseDao {
  static getAll(){
    return new Promise((resolve,reject)=>{
      models.course.findAll({})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static createNew(request){
    return new Promise((resolve,reject)=>{
      models.course.create({name:request.name,description:request.description,duration:request.duration,noOfDays:request.noOfDays,
        Couch:request.Couch,fee:request.fee,timeslots:request.timeslots,noOfStudents:request.noOfStudents,availableSlots:request.availableSlots})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static getbyid(id){
    return new Promise((resolve,reject)=>{
      models.course.findAll({where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static removebyid(id){
    return new Promise((resolve,reject)=>{
      models.course.destroy({where: {id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static updatebyid(request,id){
    return new Promise((resolve,reject)=>{
      models.course.update({name:request.name,description:request.description,duration:request.duration,noOfDays:request.noOfDays,
        Couch:request.Couch,fee:request.fee,timeslots:request.timeslots,noOfStudents:request.noOfStudents,availableSlots:request.availableSlots},
        {where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

}
