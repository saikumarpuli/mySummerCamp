import {environment} from "../../../environments/environment";
export const COURSEDETAILS ='COURSEDETAILS';
export const UserEndPoint =(type:string,params:any)=> {
  switch (type) {
    case COURSEDETAILS:
      return environment.API_ROOT + 'course';
  }
}
