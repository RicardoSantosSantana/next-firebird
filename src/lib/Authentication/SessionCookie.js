import cookie from 'js-cookie';

const cookieName = 'app-firebase-auth-ricardo';

const SessionCookie = {
  set(token) {
    cookie.set(cookieName, token, { expires: 1 });
  },
  remove() {
    cookie.remove(cookieName);
  },
};
export default SessionCookie;
