import {
	Link,
	useNavigate,
} from 'react-router-dom';
import React, { useState } from 'react';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import { signupThunk } from '../../store/session';
import { UserIcon } from '@heroicons/react/24/outline';

export default function SignupMentee() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] =
		useState('');

	const [errors, setErrors] = useState([]);

	const sessionUser = useSelector(
		state => state.session.user
	);

	const handleSubmit = async e => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);

			return dispatch(
				signupThunk(
					name,
					email,
					password,
					'Mentee'
				)
			).catch(async res => {
				const data = await res.json();
				if (data && data.errors)
					setErrors(data.errors);
			});
		}
	};

	if (sessionUser) navigate('/dashboard/aboutUs');

	return (
		<div>
			<div className="flex flex-col sm:flex-row h-screen bg-[#fafafa]">
				{/* Left side */}
				<div className="flex sm:w-2/3 w-full">
					<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
						<div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
							<h2 className="text-center text-xs uppercase font-thin tracking-wider text-gray-600">
								Hello and welcome to
							</h2>
							<Link to="/">
								<img
									className="mx-auto h-16 w-auto"
									src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_wht_blue_ca0ot0.png"
									alt="DM logo"
								/>
							</Link>
							<h2 className="mt-5 text-center text-lg font-bold leading-9 tracking-tight text-green-900">
								Sign up for a new Mentee account
							</h2>
							<p className="mt-2 text-sm font-light text-center leading-5 text-gray-500">
								Connect with our community of
								mentors and users from 141+
								countries around the world.
							</p>
						</div>

						<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
							<form
								className="space-y-6"
								action="#"
								method="POST"
								onSubmit={handleSubmit}>
								<ul>
									{errors.map((error, idx) => (
										<li
											key={idx}
											className="text-red-500">
											{error}
										</li>
									))}
								</ul>
								<div>
									<p className="block text-sm font-normal leading-6 text-gray-500">
										Role{' '}
										<span className="bg-green-800 px-4 py-1 text-green-300 rounded-full shadow-lg">
											<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
											Mentee
										</span>
									</p>
								</div>
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium leading-6 text-gray-900">
										Name
									</label>
									<div className="mt-2">
										<input
											name="name"
											type="text"
											placeholder="  name"
											value={name}
											onChange={e =>
												setName(e.target.value)
											}
											// autoComplete="off"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 text-gray-900">
										Email address
									</label>
									<div className="mt-2">
										<input
											name="email"
											type="email"
											placeholder="  email"
											value={email}
											onChange={e =>
												setEmail(e.target.value)
											}
											// autoComplete="on"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="password"
											className="block text-sm font-medium leading-6 text-gray-900">
											Password
										</label>
									</div>
									<div className="mt-2 mb-4">
										<input
											name="password"
											type="password"
											placeholder="  Password"
											value={password}
											onChange={e =>
												setPassword(
													e.target.value
												)
											}
											// autoComplete="off"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
										/>
									</div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="confirm_password"
											className="block text-sm font-medium leading-6 text-gray-900">
											Confirm Password
										</label>
									</div>
									<div className="mt-2">
										<input
											name="confirm_password"
											type="password"
											value={confirmPassword}
											onChange={e =>
												setConfirmPassword(
													e.target.value
												)
											}
											placeholder="  Confirm Password"
											// autoComplete="off"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
										Register
									</button>
								</div>
							</form>

							<p className="mt-5 text-center text-xs text-gray-500">
								Already have an account?{' '}
								<Link
									to="/login"
									className="font-semibold leading-6 text-green-600 hover:text-green-500">
									Log In
								</Link>
							</p>
						</div>
					</div>
				</div>
				{/* Right side */}
				<div className="sm:w-1/3 w-full min-h-full md:h-full bg-gradient-to-tr from-green-800 to-green-950 text-white flex items-center">
					{/* Text div */}
					<div className="p-10 md:m-10 md:py-10 md:ml-14 z-10 hover:scale-105 transition-all duration-200 ease-in-out border border-green-800 rounded-2xl bg-black backdrop-filter backdrop-blur-lg bg-opacity-40 shadow-2xl">
						<h2 className="text-3xl font-bold tracking-wider leading-7 text-white">
							Accelerate your
							<br /> career growth.
						</h2>
						<p className="mt-4 text-xs font-light leading-5 text-green-200">
							Join members from over{' '}
							<strong className="font-bold text-white">
								141+ countries
							</strong>{' '}
							to <br />
							learn from curated mentors in tech.
						</p>
						<div className="mt-10">
							<button
								type=""
								className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100">
								Contact us for more info
							</button>
						</div>
					</div>
					{/* Circles */}
					<div className="relative">
						<div
							id="circle1"
							className="absolute top-[100px] right-[150px] h-20 w-20 rounded-full bg-gradient-to-r from-green-800 to-green-400 bg-opacity-20 shadow-lg border border-green-700"></div>
						<div
							id="circle2"
							class="absolute bottom-[100px] -right-[50px] h-24 w-24 rounded-full bg-gradient-to-r from-green-800 to-green-950 bg-opacity-20 shadow-xl shadow-green-400/20 border border-green-800 animate-float"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
