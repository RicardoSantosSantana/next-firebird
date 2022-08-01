import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { firebase } from '../../firebase';
import { returnAuthentication } from "../Interface";
import  SessionCookie  from '../SessionCookie'

const provider = new GithubAuthProvider();

const logIn = async () => {

  return await signInWithPopup(firebase.auth, provider)

    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);   
      const user = firebase.formatUser(result.user) 
      const error={};
      const success="true"
      const data: returnAuthentication = { success, user, error }      
      SessionCookie.set(user.token); 
      return data

    }).catch((error) => {
      const credential = GithubAuthProvider.credentialFromError(error);   
      const user={};       
      const success="false"
      const data:returnAuthentication = { success, user, error }
      SessionCookie.remove()
      return data;
    });
}

const Github = { logIn }
export default Github;
