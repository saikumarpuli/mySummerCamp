import TrainingCourseController from "../controller/controller_trainingcourse"
export default class TrainingCourseRoute {
  static init(router){
    router
      .route('/course')
      .get(TrainingCourseController.getall)
      .post(TrainingCourseController.createNew)

    router
      .route('/course/:id')
      .get(TrainingCourseController.getbyid)
      .put(TrainingCourseController.updatebyid)
      .delete(TrainingCourseController.removebyid)

  }

}
