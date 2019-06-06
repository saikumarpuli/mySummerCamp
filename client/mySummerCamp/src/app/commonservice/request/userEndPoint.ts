import {environment} from "../../../environments/environment";
export const COURSEDETAILS ='COURSEDETAILS';
export const POSTCOURSE= 'POSTCOURSE';
export const POSTSTUDENT= 'POSTSTUDENT';
export const GETENROLLED= 'GETENROLLED';
export const GETCOURSE= 'GETCOURSE';
export const GETSTUDENT= 'GETSTUDENT';
export const UserEndPoint =(type:string,params:any)=> {
  switch (type) {
    case COURSEDETAILS:
      return environment.API_ROOT + 'course';

    case  POSTSTUDENT:
      return environment.API_ROOT + 'student';

    case  GETSTUDENT:
      return environment.API_ROOT + 'students';

    case  GETENROLLED:
      return environment.API_ROOT + 'student/' + params;

    case POSTCOURSE:
      return environment.API_ROOT + 'course';

    case GETCOURSE:
      return environment.API_ROOT + 'course/'+params;
  }
}
