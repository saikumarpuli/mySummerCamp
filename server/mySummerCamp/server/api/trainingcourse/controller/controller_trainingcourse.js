import TrainingCourseDao from '../dao/dao_trainingcourse'
export default class TrainingCourseController {

  static getall(req,res){
     TrainingCourseDao.getAll(req.query.pageNo,req.query.itemsPerPage,req.query.name)
      .then(results=>{
        res.status(200).json(results)
      })
      .catch(error=>{
        res.status(400).json(error);
        console.log(error);
      })
   }
  static createNew(req,res){
    TrainingCourseDao.createNew(req.body)
      .then(results=>{
        res.status(200).json(results)
      })
      .catch(error=>res.status(400).json(error))
  }

  static getbyid(req,res){
    TrainingCourseDao.getbyid(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
   }

   static updatebyid(req,res){
     TrainingCourseDao.updatebyid(req.body,req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
   }

   static removebyid(req,res){
     TrainingCourseDao.removebyid(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
   }
}
