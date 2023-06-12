import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import {
	Link,
	useNavigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../store/session';

const navigation = [
	{
		name: 'Become a mentor',
		href: '/signupMentor',
	},
	{
		name: 'Become a mentee',
		href: '/signupMentee',
	},
];

export default function Hero({
	sessionUser,
	mentors,
}) {
	const [mobileMenuOpen, setMobileMenuOpen] =
		useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = async e => {
		e.preventDefault();
		await dispatch(logoutThunk());
		navigate('/');
	};

	return (
		<div className="bg-white">
			<header className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-90 border-b backdrop-blur">
				<nav
					className="flex items-center justify-between p-2 lg:px-8"
					aria-label="Global">
					<div className="flex lg:flex-1">
						<img
							className="w-auto h-16"
							src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_wht_blue_ca0ot0.png"
							alt="dm_logo"
						/>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() =>
								setMobileMenuOpen(true)
							}>
							<span className="sr-only">
								Open main menu
							</span>
							<Bars3Icon
								className="h-6 w-6"
								aria-hidden="true"
							/>
						</button>
					</div>

					{!sessionUser ? (
						<div className="hidden lg:flex lg:gap-x-12">
							{navigation.map(item => (
								<a
									key={item.name}
									href={item.href}
									className={`text-sm font-normal text-gray-600 py-2 px-3 bg-[#fafafa] rounded-lg hover:shadow-lg hover:font-bold hover:text-white ${item.name === "Become a mentor" ? "hover:bg-[#302e81]" : "hover:bg-[#166434]"}`}>
									{item.name}
								</a>
							))}
						</div>
					) : null}

					{!sessionUser ? (
						<div className="hidden lg:flex lg:flex-1 lg:justify-end mr-10">
							<Link to={'/login'}>
								<button
									type="button"
									className="rounded-md border border-solid border-black bg-black px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
									Log in
								</button>
							</Link>
						</div>
					) : (
						<div className="hidden lg:flex lg:flex-1 lg:justify-end mr-10">
							<Link to={'/dashboard/aboutUs'}>
								<button
									type="button"
									className="rounded-md border border-solid border-black bg-dark1 px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
									Dashboard
								</button>
							</Link>
							<button
								type="button"
								onClick={handleLogout}
								className="rounded-md border ml-5 border-solid border-black bg-dark1 px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
								Log out
							</button>
						</div>
					)}
				</nav>
				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}>
					<div className="fixed inset-0 z-50" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a
								href="/"
								className="-m-1.5 p-1.5">
								<span className="sr-only">
									DevelopMe
								</span>
								<img
									className="h-16 w-auto"
									src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_wht_blue_ca0ot0.png"
									alt="dm_logo"
								/>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() =>
									setMobileMenuOpen(false)
								}>
								<span className="sr-only">
									Close menu
								</span>
								<XMarkIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10 w-1/2">
								<div className="space-y-4 py-6">
									{navigation.map(item => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block text-sm font-normal text-gray-600 py-2 px-3 bg-light1 rounded-lg hover:bg-light4 shadow-lg">
											{item.name}
										</a>
									))}
								</div>
								<div className="py-10">
									<Link
										to={'/login'}
										className="-mx-3 block rounded-md border border-solid border-black bg-black px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
										Log in
									</Link>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>

			<div className="relative px-8 pt-24 isolate">
				<div className="mx-auto max-w-6xl sm:py-48 lg:py-56">
					<div className="text-left justify-start">
						<h1 className="md:text-4xl text-2xl md:font-extrabold font-bold md:tracking-wide text-gray-900">
							Learn and grow with help from
							<br />
							world-class mentors for free
						</h1>
						<p className="mt-6 text-base leading-6 text-gray-600">
							Book and meet over
							<strong>
								{' '}
								{mentors.length - 1}+ mentors{' '}
							</strong>
							for 1:1
							<br /> mentorship in our global
							community
						</p>
						<hr className="mt-4 border-blue-500 w-16 border-2" />
					</div>

					{/* People */}
					<div className="hidden lg:block">
						{/* Blue Guy Avatar */}
						<div className="absolute top-[100px] right-[400px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out ">
							<img
								className="h-24 w-24 rounded-full object-cover object-top"
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
								alt="avatar"
							/>
						</div>
						{/* Blue Lady Avatar */}
						<div className="absolute top-[160px] right-[240px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-pulse">
							<img
								className="h-20 w-20 rounded-full object-cover object-top"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
								alt="avatar"
							/>
						</div>
						{/* Orange Guy Avatar */}
						<div className="absolute top-[260px] right-[600px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-pulse">
							<img
								className="h-20 w-20 rounded-full object-cover object-top"
								src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
								alt="avatar"
							/>
						</div>
						{/* Purple Lady Avatar */}
						<div className="absolute top-[330px] right-[280px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-float">
							<img
								className="h-40 w-40 rounded-full object-cover object-top"
								src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
								alt="avatar"
							/>
						</div>
						{/* Pink Guy Avatar */}
						<div className="absolute top-[500px] right-[700px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-float2">
							<img
								className="h-20 w-20 rounded-full object-cover object-top"
								src="https://images.unsplash.com/photo-1587057173081-36bc799b78ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgxfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="avatar"
							/>
						</div>
						{/* White Lady Avatar */}
						<div className="absolute top-[530px] right-[420px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-pulse">
							<img
								className="h-20 w-20 rounded-full object-cover object-top"
								src="https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
								alt="avatar"
							/>
						</div>
						{/* Pink Lady Avatar */}
						<div className="absolute top-[530px] right-[240px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
							<img
								className="h-24 w-24 rounded-full object-cover object-top"
								src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgyfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="avatar"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
