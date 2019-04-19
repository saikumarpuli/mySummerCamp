 import StudentRoute from "../api/student/route/route_student";
import TrainingCourseRoute from "../api/trainingcourse/route/route_trainingcourse";


export default class Routes {
   static init(app, router) {
      StudentRoute.init(router)
     TrainingCourseRoute.init(router)
     app.use("/", router);
   }
}
