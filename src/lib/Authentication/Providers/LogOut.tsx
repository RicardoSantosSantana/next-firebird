import { signOut } from "firebase/auth";
import { firebase } from '../../firebase';
import { returnAuthentication } from "../Interface";
import  SessionCookie  from '../SessionCookie'

 
const logOut = async () => {
  
 return await signOut(firebase.auth).then(() => {
    SessionCookie.remove()
    const data:returnAuthentication = { result:"true", user:{}, error:{} }
    return data;
  }).catch((error) => {
    SessionCookie.remove()
    const data:returnAuthentication = { result:"false", user:{}, error }
    return data;
  });
}

export default logOut