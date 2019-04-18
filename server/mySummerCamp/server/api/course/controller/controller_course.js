import CourseDao from '../dao/dao_course'
export default class CourseController {
  static getall(req,res){
    CourseDao.getAll()
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }

  static createNew(req,res){
    CourseDao.createNew(req.body)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }

  static getbyid(req,res){
    CourseDao.getbyid(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
   }

   static updatebyid(req,res){
     CourseDao.updatebyid(req.body,req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
   }

   static removebyid(req,res){
     CourseDao.removebyid(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
   }
}
