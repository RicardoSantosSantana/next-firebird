import React, { createContext, useState } from 'react';
import { Props, authContextType, authContextDefaultValues } from '../lib/Authentication/Interface';
import Authentication from '../lib/Authentication/Authentication';

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function AuthProvider({ children } :Props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const signInGoogle = async () => {
    setLoading(true);
    const data = await Authentication.Google.logIn();
    await setUser(data.user);
    console.log(data.user);
    console.log(data.error);
    setError(data.error);
    setLoading(false);
  };
  const signInGithub = async () => {
    setLoading(true);
    const data = await Authentication.GitHub.logIn();
    await setUser(data.user);
    setError(data.error);
    setLoading(false);
  };
  const logOut = async () => {
    setLoading(true);
    const data = await Authentication.logOut();
    await setUser(data.user);
    setError(data.error);
    setLoading(false);
  };

  const value:authContextType = {
    signInGoogle, signInGithub, logOut, user, error, loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
