import React, {useState, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {Listbox, Transition} from '@headlessui/react';
import {
	CheckIcon,
	ChevronUpDownIcon,
	UserIcon,
} from '@heroicons/react/20/solid';
import {loginThunk} from '../../store/session';

const roles = [
	{id: 1, name: 'Mentor'},
	{id: 2, name: 'Mentee'},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const [classification, setClassification] = useState(roles[0]);

	const demoLoginMentor = async e => {
		e.preventDefault();

		return await dispatch(loginThunk('mentor@gu.io', 'password', 'Mentor'));
	};

	const demoLoginMentee = async e => {
		e.preventDefault();

		return await dispatch(loginThunk('john.doe@cgu.io', 'password', 'Mentee'));
	};

	const sessionUser = useSelector(state => state.session.user);

	if (sessionUser) navigate('/dashboard');

	const handleSubmit = async e => {
		e.preventDefault();
		setErrors([]);

		return await dispatch(
			loginThunk(email, password, classification.name)
		).catch(async res => {
			const data = await res.json();
			if (data && data.errors) setErrors(data.errors);
		});
	};

	return (
		<div className="flex flex-col lg:flex-row  h-screen bg-[#fafafa]">
			{/* Left side */}
			<div className="sm:w-full lg:w-2/3">
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
						<h2 className="text-center text-xs font-thin tracking-wider text-gray-600 uppercase">
							Welcome back to
						</h2>
						<Link to={'/'}>
							<img
								className="mx-auto h-16 w-auto"
								src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_wht_blue_ca0ot0.png"
								alt="DM Logo"
							/>
						</Link>
						<h2 className="mt-5 text-center text-lg font-bold leading-9 tracking-tight text-gray-700">
							Log in to your account
						</h2>
					</div>

					<div className="text-center flex flex-row mx-auto mt-3">
						<div className=" mx-2 my-2 ">
							<button
								className="bg-green-800 hover:bg-green-900 px-4 py-2 text-green-300 rounded-full shadow-lg text-xs md:text-sm hover:scale-105 transition-all duration-200 ease-in-out"
								onClick={demoLoginMentee}>
								<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
								Mentee demo login
							</button>
						</div>
						<div className=" mx-2 my-2 ">
							<button
								className="bg-indigo-800 hover:bg-indigo-900 px-4 py-2 text-indigo-300 rounded-full shadow-lg text-xs md:text-sm hover:scale-105 transition-all duration-200 ease-in-out"
								onClick={demoLoginMentor}>
								<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
								Mentor demo login
							</button>
						</div>
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
							<Listbox value={classification} onChange={setClassification}>
								{({open}) => (
									<>
										<Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
											Role
										</Listbox.Label>
										<div className="relative">
											<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
												<span className="block truncate">
													{classification.name}
												</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
													<ChevronUpDownIcon
														className="h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
												</span>
											</Listbox.Button>

											<Transition
												show={open}
												as={Fragment}
												leave="transition ease-in duration-100"
												leaveFrom="opacity-100"
												leaveTo="opacity-0">
												<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
													{roles.map(role => (
														<Listbox.Option
															key={role.id}
															className={({active}) =>
																classNames(
																	active
																		? 'bg-indigo-600 text-white'
																		: 'text-gray-900',
																	'relative cursor-default select-none py-2 pl-3 pr-9'
																)
															}
															value={role}>
															{({classification, active}) => (
																<>
																	<span
																		className={classNames(
																			classification
																				? 'font-semibold'
																				: 'font-normal',
																			'block truncate'
																		)}>
																		{role.name}
																	</span>

																	{classification ? (
																		<span
																			className={classNames(
																				active
																					? 'text-white'
																					: 'text-indigo-600',
																				'absolute inset-y-0 right-0 flex items-center pr-4'
																			)}>
																			<CheckIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		</span>
																	) : null}
																</>
															)}
														</Listbox.Option>
													))}
												</Listbox.Options>
											</Transition>
										</div>
									</>
								)}
							</Listbox>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900">
									Email address
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										placeholder="  email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										autoComplete="email"
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
								<div className="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										value={password}
										placeholder="  password"
										onChange={e => setPassword(e.target.value)}
										autoComplete="current-password"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
									Log in
								</button>
							</div>
						</form>

						<p className="mt-5 text-center text-xs text-gray-500">
							Don't have an account? Sign Up{' '}
							<Link
								to={`/signupMentee`}
								className="font-semibold leading-6 text-green-600 hover:text-green-800">
								Mentee
							</Link>
							{'   '}
							or{'   '}
							<Link
								to={`/signupMentor`}
								className="font-semibold leading-6 text-indigo-600 hover:text-indigo-800">
								Mentor
							</Link>
						</p>
					</div>
				</div>
			</div>
			{/* Right side */}
			<div className="sm:w-full lg:w-1/3 min-h-full md:h-full bg-gradient-to-tr from-dark3 to-dark1 text-white flex items-center md:justify-center md:p-5 sm:p-2">
				{/* Text Div */}
				<div className="p-10 md:m-10 md:py-10 ml-14 z-10 hover:scale-105 transition-all duration-200 ease-in-out border border-dark4 rounded-2xl bg-black backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl hover:border-dark5">
					<h2 className="text-3xl font-bold tracking-wider leading-7 text-white">
						Accelerate your
						<br /> career growth.
					</h2>
					<p className="mt-4 text-xs font-light leading-5 text-gray-200">
						Join members from over{' '}
						<strong className="font-bold text-white">141+ countries</strong> to{' '}
						<br />
						learn from curated mentors in tech.
					</p>
					<div className="mt-10">
						<button
							type=""
							className="flex w-full justify-center rounded-md bg-dark1 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-dark4 focus-visible:outline  border border-dark4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100">
							Contact us for more info
						</button>
					</div>
				</div>
				{/* Circles */}
				<div className="relative">
					<div
						id="circle1"
						className="absolute top-[100px] right-[150px] h-20 w-20 rounded-full bg-gradient-to-r from-dark1 to-dark3 bg-opacity-20 shadow-lg border border-dark5"></div>
					<div
						id="circle2"
						className="absolute bottom-[100px] -right-[20px] h-24 w-24 rounded-full bg-gradient-to-r from-dark3 to-dark1 bg-opacity-20 shadow-lg shadow-dark6/30 border border-dark4 animate-float"></div>
				</div>
			</div>
		</div>
	);
}
