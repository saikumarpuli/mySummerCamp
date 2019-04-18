import CourseController from "../controller/controller_course"
export default class CourseRoute {
  static init(router){
    router
      .route('/course')
      .get(CourseController.getall)
      .post(CourseController.createNew)

    router
      .route('/course/:id')
      .get(CourseController.getbyid)
      .put(CourseController.updatebyid)
      .delete(CourseController.removebyid)

  }

}
