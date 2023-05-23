import {Link, useNavigate} from 'react-router-dom';
import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signupThunk} from '../../store/session';

export default function SignupMentor() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [errors, setErrors] = useState([]);

	const sessionUser = useSelector(state => state.session.user);

	const handleSubmit = async e => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);

			return dispatch(signupThunk(name, email, password, 'Mentor')).catch(
				async res => {
					const data = await res.json();
					if (data && data.errors) setErrors(data.errors);
				}
			);
		}
	};

	if (sessionUser) navigate('/dashboard');

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-10 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<Link to="/">
						<img
							className="mx-auto h-12 w-auto"
							src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_wht_blue_ca0ot0.png"
							alt="Your Company"
						/>
					</Link>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign up a new account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						action="#"
						method="POST"
						onSubmit={handleSubmit}>
						<ul>
							{errors.map((error, idx) => (
								<li key={idx} className="text-red-500">
									{error}
								</li>
							))}
						</ul>
						<div>
							<label className="block text-sm font-medium leading-6 text-gray-900">
								Role: Mentor
							</label>
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
									onChange={e => setName(e.target.value)}
									// autoComplete="off"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									onChange={e => setEmail(e.target.value)}
									// autoComplete="on"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									value={password}
									onChange={e => setPassword(e.target.value)}
									placeholder="  Password"
									// autoComplete="off"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									onChange={e => setConfirmPassword(e.target.value)}
									placeholder="  Confirm Password"
									// autoComplete="off"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Register
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Already have an account?{' '}
						<Link
							to="/login"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Log In
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
