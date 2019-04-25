import {environment} from "../../../environments/environment";
export const COURSEDETAILS ='COURSEDETAILS';
export const CREATECOURSE='CREATECOURSE';
export const POSTCOURSE= 'POSTCOURSE';
export const POSTSTUDENT= 'POSTSTUDENT';
export const UserEndPoint =(type:string,params:any)=> {
  switch (type) {
    case COURSEDETAILS:
      return environment.API_ROOT + 'course';

    case  POSTSTUDENT:
      return environment.API_ROOT + 'student';

    case POSTCOURSE:
      return environment.API_ROOT + 'course';
  }
}
