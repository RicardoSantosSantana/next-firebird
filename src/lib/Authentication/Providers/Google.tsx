import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebase } from '../../firebase';
import { returnAuthentication } from '../Interface';
import SessionCookie from '../SessionCookie';

const provider = new GoogleAuthProvider();

const logIn = async () => await signInWithPopup(firebase.auth, provider)

	.then((result) => {		
		const user = firebase.formatUser(result.user);
		const error = {};
		const success = 'true';
		const data: returnAuthentication = { success, user, error };
		SessionCookie.set(user.token);
		return data;
	}).catch((error) => {		
		const user = {};
		const success = 'false';
		const data:returnAuthentication = { success, user, error };
		SessionCookie.remove();
		return data;
	});

const Google = { logIn };
export default Google;
