import {environment} from "../../../environments/environment";
export const COURSEDETAILS ='COURSEDETAILS';
export const CREATECOURSE='CREATECOURSE';
export const POSTSPOST= 'POSTSPOST';
export const UserEndPoint =(type:string,params:any)=> {
  switch (type) {
    case COURSEDETAILS:
      return environment.API_ROOT + 'course';

    case  CREATECOURSE:
      return environment.API_ROOT + 'course';

    case POSTSPOST:
      return environment.API_ROOT + 'course';
  }
}
