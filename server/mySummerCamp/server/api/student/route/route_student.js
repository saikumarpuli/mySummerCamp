import StudentController from "../controller/controller_student"
export default class StudentRoute {
  static init(router){
    router
      .route('/student')
      .get(StudentController.getall)
      .post(StudentController.createNew)

    router
      .route('/student/:id')
      .get(StudentController.getbyid)
      .put(StudentController.updatebyid)
      .delete(StudentController.removebyid)

  }

}
