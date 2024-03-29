// import { useSession, getSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Header, Footer } from '../../components'
import config from '../../config';

export default function Login() {
	// const [ session, loading ] = useSession()

	const [btnText, setBtnText] = useState("Submit");
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		setBtnText('Loading');

		let url = config.API_URL + '/auth/signin';
		var data = {
			username: username,
			password: password
		}

		fetch(url, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json; charset=utf-8',
				'Access-Control-Allow-Headers': '*'
			},
			method: "POST",
			body: JSON.stringify(data)
		})
		.then( res => {
			return res.json()
		})
		.then( res => {
			localStorage.setItem('USERNAME', res.username);
			localStorage.setItem('TOKEN', res.accessToken);
			window.location = '/account/dashboard';
			setBtnText('Submit');
		})
		.catch(res => {
			console.log(res);
			setBtnText('Unsuccessful');
		});
	}

	useEffect(() => {
		if ( localStorage.getItem('TOKEN') ) {
			window.location = '/u/dashboard';
		};
	}, []);

	return (
		<main>
			<Head>
				<title>Login Portal</title>	
			</Head>
			<div className="page-wrapper">
				<Header />
				<section className="h-screen w-screen grid items-center justify-center grid-cols-1">
					<article className="mx-auto bg-uc-secondary rounded-md p-8 block w-full max-w-sm">
						<h2 className="text-4xl text-center mb-12">Login</h2>
						<form onSubmit={ onSubmit } className="grid grid-cols-1 w-full">
							<input placeholder="Username" name="username" type="text"
								value={ username } onChange={ e => setUsername(e.target.value) }
								className="bg-transparent border-b border-uc-primary py-2 px-4" />
							<input placeholder="Password" name="password" type="password"
								value={ password } onChange={ e => setPassword(e.target.value) }
								className="bg-transparent border-b border-uc-primary py-2 px-4 my-4" />
							<input className="rounded-lg cursor-pointer bg-uc-primary text-uc-secondary py-2 px-8 uppercase w-full font-medium text-base tracking-wider"
								type="submit" value={ btnText } />
						</form>
					</article>
				</section>

				{/* Sections End */}
			</div>
		</main>
	)
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getSession(context)
//     }
//   }
// }