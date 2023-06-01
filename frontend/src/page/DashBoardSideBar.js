import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	UserGroupIcon,
	HomeIcon,
	XMarkIcon,
	ChatBubbleLeftIcon,
	UserCircleIcon,
	ChartPieIcon,
	BriefcaseIcon,
	UsersIcon,
} from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../store/session';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function DashBoard() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [currentTab, setCurrentTab] = useState('Mentors');
	let navigation;

	const currentUser = useSelector(state => state.session.user);

	const handleLogout = async e => {
		e.preventDefault();
		await dispatch(logoutThunk());
		navigate('/');
	};
	if (!currentUser) {
		navigate('/login');
	}

	if (currentUser?.classification === 'Mentor') {
		navigation = [
			{
				name: 'Search mentors',
				href: 'searchMentors',
				icon: MagnifyingGlassIcon,
				current: currentTab === 'Search mentors',
			},
			{
				name: 'Search mentees',
				href: 'searchMentees',
				icon: MagnifyingGlassIcon,
				current: currentTab === 'Search mentees',
			},
			{
				name: 'My mentees',
				href: 'menteelist',
				icon: UsersIcon,
				current: currentTab === 'My mentees',
			},
			{
				name: 'Chat',
				href: 'messageBoard',
				icon: ChatBubbleLeftIcon,
				current: currentTab === 'Chat',
			},
			{
				name: 'My profile',
				href: 'userProfile',
				icon: UserCircleIcon,
				current: currentTab === 'My profile',
			},
			{
				name: 'User data',
				href: 'report',
				icon: ChartPieIcon,
				current: currentTab === 'User data',
			},
			{
				name: 'Job posts',
				href: 'jobBoard',
				icon: BriefcaseIcon,
				current: currentTab === 'Job posts',
			},
		];
	} else {
		navigation = [
			{
				name: 'Search mentors',
				href: 'searchMentors',
				icon: MagnifyingGlassIcon,
				current: currentTab === 'Search mentors',
			},
			{
				name: 'Search mentees',
				href: 'searchMentees',
				icon: MagnifyingGlassIcon,
				current: currentTab === 'Search mentees',
			},
			{
				name: 'Chat',
				href: 'messageBoard',
				icon: ChatBubbleLeftIcon,
				current: currentTab === 'Chat',
			},
			{
				name: 'My profile',
				href: 'userProfile',
				icon: UserCircleIcon,
				current: currentTab === 'My profile',
			},
			{
				name: 'User data',
				href: 'report',
				icon: ChartPieIcon,
				current: currentTab === 'User data',
			},
			{
				name: 'Job posts',
				href: 'jobBoard',
				icon: BriefcaseIcon,
				current: currentTab === 'Job posts',
			},
		];
	}

	if (currentUser) {
		return (
			<>
				<div>
					<Transition.Root show={sidebarOpen} as={Fragment}>
						<Dialog
							as="div"
							className="relative z-50 lg:hidden"
							onClose={setSidebarOpen}>
							<Transition.Child
								as={Fragment}
								enter="transition-opacity ease-linear duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="transition-opacity ease-linear duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0">
								<div className="fixed inset-0 bg-gray-900/80" />
							</Transition.Child>

							<div className="fixed inset-0 flex">
								<Transition.Child
									as={Fragment}
									enter="transition ease-in-out duration-300 transform"
									enterFrom="-translate-x-full"
									enterTo="translate-x-0"
									leave="transition ease-in-out duration-300 transform"
									leaveFrom="translate-x-0"
									leaveTo="-translate-x-full">
									<Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
										<Transition.Child
											as={Fragment}
											enter="ease-in-out duration-300"
											enterFrom="opacity-0"
											enterTo="opacity-100"
											leave="ease-in-out duration-300"
											leaveFrom="opacity-100"
											leaveTo="opacity-0">
											<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
												<button
													type="button"
													className="-m-2.5 p-2.5"
													onClick={() => setSidebarOpen(false)}>
													<span className="sr-only">Close sidebar</span>
													<XMarkIcon
														className="h-6 w-6 text-white"
														aria-hidden="true"
													/>
												</button>
											</div>
										</Transition.Child>
										{/* Sidebar component, swap this element with another sidebar if you like */}
										<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
											<div className="flex h-16 shrink-0 items-center">
												<img
													className="h-12 w-auto"
													src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_white_blue_clear_nffi46.png"
													alt="Your Company"
												/>
											</div>
											<nav className="flex flex-1 flex-col">
												<ul className="flex flex-1 flex-col gap-y-7">
													<li>
														<ul className="-mx-2 space-y-1">
															{navigation.map(item => (
																<li key={item.name}>
																	<Link
																		to={item.href}
																		className={classNames(
																			item.current
																				? 'bg-indigo-700 text-white'
																				: 'text-indigo-200 hover:text-white hover:bg-indigo-700',
																			'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
																		)}>
																		<item.icon
																			className={classNames(
																				item.current
																					? 'text-white'
																					: 'text-indigo-200 group-hover:text-white',
																				'h-6 w-6 shrink-0'
																			)}
																			aria-hidden="true"
																		/>
																		{item.name}
																	</Link>
																</li>
															))}
														</ul>
													</li>
												</ul>
											</nav>
											<Link to={'/'}>
												<button
													type="button"
													className="rounded-md border border-solid border-black bg-black px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
													sign out
												</button>
											</Link>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</Dialog>
					</Transition.Root>

					{/* Static sidebar for desktop */}
					<div className="hidden relative lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
						{/* Sidebar component, swap this element with another sidebar if you like */}
						<div className="">
							<a href="/" className="">
								<img
									className="h-16 w-auto ml-10"
									src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_wht_blue_ca0ot0.png"
									alt="DM Logo"
								/>
							</a>
						</div>
						{/* Sidebar */}
						<div className="flex absolute items-start justify-center align-middle flex-col gap-y-4 overflow-y-auto bg-gradient-to-b from-dark3 to-dark1 px-8 py-10 pl-20 min-h-80 rounded-2xl shadow-2xl shadow-dark5/50 top-[105px] -left-5 ring-1 ring-offset-8 ring-offset-light2 ring-light4">
							<nav className="flex flex-1 flex-col">
								<ul className="flex flex-1 flex-col gap-y-3">
									<li>
										<ul className="-mx-2 space-y-3">
											{navigation.map(item => (
												<li key={item.name}>
													<Link
														to={item.href}
														onClick={() => setCurrentTab(item.name)}
														className={classNames(
															item.current
																? 'bg-gradient-to-r from-dark1 to-dark2 text-white shadow-lg shadow-dark5/30 border border-dark5'
																: 'text-light3 hover:text-white hover:bg-dark3',
															'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
														)}>
														<item.icon
															className={classNames(
																item.current
																	? 'text-white'
																	: 'text-light3 group-hover:text-white',
																'h-5 w-5 shrink-0'
															)}
															aria-hidden="true"
														/>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</li>
								</ul>
							</nav>{' '}
							<div className="pt-5 relative">
								{/* Text div */}
								<div className="p-4 z-30 border border-dark4 rounded-2xl bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-2xl shadow-slate-500/50">
									<h2 className="text-3xl font-bold tracking-wider leading-7 text-white">
										Our vision.
									</h2>
									<p className="mt-4 text-xs font-light leading-5 text-light3">
										Platform for aspiring software developers to{' '}
										<strong className="font-bold text-light1">
											connect with Mentors
										</strong>
										.
									</p>
									<div className="mt-4">
										<button
											type=""
											className="flex w-full justify-center rounded-md bg-dark1 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-dark4 focus-visible:outline  border border-dark4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100">
											Contact us
										</button>
									</div>
								</div>
								{/* Circles */}
								<div className="">
									<div
										id="circle1"
										className="absolute top-[200px] -left-[40px] h-16 w-16 rounded-full bg-gradient-to-r from-dark1 to-dark4 shadow-lg border border-dark4 animate-float"></div>
									<div
										id="circle2"
										className="absolute top-[50px] left-[170px] h-12 w-12 rounded-full bg-gradient-to-r from-dark4 to-dark1 shadow-lg border border-dark4"></div>
								</div>
							</div>
						</div>
						<div className="p-2 absolute bottom-[50px] right-10">
							<p className="text-xs text-dark6">
								© 2023 DevelopMe. All rights reserved.
							</p>
						</div>
					</div>

					<div className="lg:pl-72">
						<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white bg-opacity-90 backdrop-blur px-4 sm:gap-x-6 sm:px-6 lg:px-8">
							<button
								type="button"
								className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
								onClick={() => setSidebarOpen(true)}>
								<span className="sr-only">Open sidebar</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</button>

							{/* Separator */}
							<div
								className="h-6 w-px bg-gray-900/10 lg:hidden"
								aria-hidden="true"
							/>

							<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
								<div className="relative flex flex-1"></div>
								<div className="flex items-center gap-x-4 lg:gap-x-6">
									{/* Separator */}
									<div
										className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
										aria-hidden="true"
									/>

									{/* Profile dropdown */}
									<Menu as="div" className="relative">
										<Menu.Button className="-m-1.5 flex items-center p-1.5">
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full bg-gray-50"
												src={currentUser.profileImg}
												alt=""
											/>
											<span className="hidden lg:flex lg:items-center">
												<span
													className="ml-4 text-sm font-semibold leading-6 text-gray-900 pr-5"
													aria-hidden="true">
													{currentUser.name}
												</span>

												<button
													type="button"
													onClick={handleLogout}
													className="rounded-md border border-solid border-black bg-black px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
													Sign out
												</button>
											</span>
										</Menu.Button>
									</Menu>
								</div>
							</div>
						</div>

						<main className="py-10">
							<div className="px-4 sm:px-6 lg:px-8">
								<Outlet />
							</div>
						</main>
					</div>
				</div>
			</>
		);
	}
}

export default DashBoard;
