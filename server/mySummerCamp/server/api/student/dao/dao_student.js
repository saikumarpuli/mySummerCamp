import models from '../../../models'
import Promise from 'bluebird'
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
export default class StudentDao {

  static getAll(){
    return new Promise((resolve,reject)=>{
      models.student.findAll({})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }


  static getandcountAll(pageData,limit,course,firstName,lastName,email){
    return new Promise((resolve,reject)=>{

          let page = pageData;      // page number
           let offset = limit * (page - 1);
          models.student.findAndCountAll({

            where:{
              course: {[Op.iLike]: '%' + course + '%'},
              firstName: {[Op.iLike]: '%' + firstName + '%'},
              lastName: {[Op.iLike]: '%' + lastName + '%'},
              email: {[Op.iLike]: '%' + email + '%'},
            },
            limit: limit,
            offset: offset,
            order: [
              ['createdAt', 'DESC']
            ],
          }).then(result =>{
            resolve(result);
            console.log("Results",result)
          }).catch(err =>{
            reject(err);
          });
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
      models.student.findAll({where:{trainingcourse_id:id}})
        .then(results=>resolve(results))
        .catch(error=>reject(error))
    })
  }
  static getbycourse(req){
    return new Promise((resolve,reject)=>{
      models.student.findAll({where:{course:req}})
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
