import StudentDao from '../dao/dao_student'
export default class StudentController {
  static getandcountall(req,res){
     StudentDao.getandcountAll(req.query.pageNo,req.query.itemsPerPage,req.query.course,req.query.firstName,req.query.lastName,req.query.email)
      .then(results=>{
        res.status(200).json(results);
      })
      .catch(error=>res.status(400).json(error))
  }

  static getall(req,res){
    StudentDao.getAll()
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }

  static createNew(req,res){
    StudentDao.createNew(req.body)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }

  static getbyid(req,res){
    StudentDao.getbyid(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }

  static getbycourse(req,res){
     StudentDao.getbycourse(req.params.course)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }
  static updatebyid(req,res){
    StudentDao.updatebyid(req.body,req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }

  static removebyid(req,res){
    StudentDao.removebyid(req.params.id)
      .then(results=>res.status(200).json(results))
      .catch(error=>res.status(400).json(error))
  }
}
