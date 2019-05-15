import StudentController from "../controller/controller_student"
export default class StudentRoute {
  static init(router){
    router
      .route('/student')
      .get(StudentController.getandcountall)
      .post(StudentController.createNew)
    router
      .route('/students')
      .get(StudentController.getall)

    router
      .route('/student/:id')
      .get(StudentController.getbyid)
      .put(StudentController.updatebyid)
      .delete(StudentController.removebyid)

    router
      .route('/student/enrolled/:course')
      .get(StudentController.getbycourse)

  }

}
