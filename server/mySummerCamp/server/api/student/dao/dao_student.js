import models from '../../../models'
import Promise from 'bluebird'
export default class StudentDao {
  static getAll(){
    return new Promise((resolve,reject)=>{
      models.student.findAll({})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static createNew(request){
    return new Promise((resolve,reject)=>{
      models.student.create({firstName:request.firstName, lastName:request.lastName,email:request.email,course:request.course,trainingcourse_id:request.trainingcourse_id})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static getbyid(id){
    return new Promise((resolve,reject)=>{
      models.student.findAll({where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static removebyid(id){
    return new Promise((resolve,reject)=>{
      models.student.destroy({where: {id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

  static updatebyid(request,id){
    return new Promise((resolve,reject)=>{
      models.student.update({firstName:request.firstName, lastName:request.lastName,email:request.email,course:request.course,trainingcourse_id:request.trainingcourse_id},{where:{id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }

}
