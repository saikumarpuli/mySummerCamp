import TodoRoutes from "../api/todo/route/todo-route";
import StudentRoute from "../api/student/route/route_student";
import CourseRoute from "../api/course/route/route_course";


export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     StudentRoute.init(router)
     CourseRoute.init(router)
     

     app.use("/", router);
   }
}
