import React from 'react'
import { AppProps } from 'next/app'
import useAuth from '../hooks/useAuth'

const Login: React.FC <AppProps> = () => {
  const { signInGoogle, signInGithub, logOut, user, loading } = useAuth()

  return (
		<>
			<button onClick={signInGoogle}>continuar com Google</button>
      &nbsp;&nbsp;| &nbsp;&nbsp;
			<button onClick={signInGithub}>continuar com GitHub</button>
      &nbsp;&nbsp;| &nbsp;&nbsp;
			<p>
				<button onClick={logOut}>
					{' '}
					<strong>D E S L O G A R</strong>
				</button>
        &nbsp;&nbsp;| &nbsp;&nbsp;
			</p>
			{loading
			  ? (
				<h1
					style={{
					  color: 'white',
					  backgroundColor: 'blue',
					  fontWeight: 'bold'
					}}
				>
          LOADING
				</h1>
			    )
			  : (
			  ''
			    )}
			<p>
				{' '}
				<img src={user?.photoUrl} />{' '}
			</p>
			<strong>Name</strong>
			{user?.name}
		</>
  )
}
export default Login
