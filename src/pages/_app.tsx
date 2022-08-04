import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';

const MyApp: React.FC <AppProps> = ({ Component, pageProps }) => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default MyApp;
