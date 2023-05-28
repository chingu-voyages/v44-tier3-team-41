import {Fragment, useState} from 'react';
import {useSelector} from 'react-redux';
import {
	Link,
	Outlet,
	useNavigate,
} from 'react-router-dom';
import {
	Dialog,
	Menu,
	Transition,
} from '@headlessui/react';
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
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import {useDispatch} from 'react-redux';
import {logoutThunk} from '../store/session';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function DashBoard() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [sidebarOpen, setSidebarOpen] =
		useState(false);
	const [currentTab, setCurrentTab] =
		useState('Mentors');
	let navigation;

	const currentUser = useSelector(
		state => state.session.user
	);

	const handleLogout = async e => {
		e.preventDefault();
		await dispatch(logoutThunk());
		navigate('/');
	};

	if (currentUser?.classification === 'Mentor') {
		navigation = [
			{
				name: 'all mentors',
				href: 'mentorlist',
				icon: HomeIcon,
				current: currentTab === 'all mentors',
			},

			{
				name: 'all mentees',
				href: 'menteelist',
				icon: UserGroupIcon,
				current: currentTab === 'all mentees',
			},
			{
				name: 'my mentees',
				href: 'menteelist',
				icon: UsersIcon,
				current: currentTab === 'my mentees',
			},
			{
				name: 'chat',
				href: 'messageBoard',
				icon: ChatBubbleLeftIcon,
				current: currentTab === 'chat',
			},
			{
				name: 'search mentors',
				href: 'search',
				icon: MagnifyingGlassIcon,
				current: currentTab === 'search mentors',
			},
			{
				name: 'my profile',
				href: 'userProfile',
				icon: UserCircleIcon,
				current: currentTab === 'my profile',
			},
			{
				name: 'user data',
				href: 'report',
				icon: ChartPieIcon,
				current: currentTab === 'user data',
			},
			{
				name: 'job posts',
				href: 'jobBoard',
				icon: BriefcaseIcon,
				current: currentTab === 'job posts',
			},
		];
	} else {
		navigation = [
			{
				name: 'all mentors',
				href: 'mentorlist',
				icon: HomeIcon,
				current: currentTab === 'all mentors',
			},

			{
				name: 'all mentees',
				href: 'menteelist',
				icon: UserGroupIcon,
				current: currentTab === 'all mentees',
			},
			{
				name: 'chat',
				href: 'messageBoard',
				icon: ChatBubbleLeftIcon,
				current: currentTab === 'chat',
			},
			{
				name: 'search mentors',
				href: 'search',
				icon: MagnifyingGlassIcon,
				current: currentTab === 'search mentors',
			},
			{
				name: 'my profile',
				href: 'userProfile',
				icon: UserCircleIcon,
				current: currentTab === 'my profile',
			},
			{
				name: 'user data',
				href: 'report',
				icon: ChartPieIcon,
				current: currentTab === 'user data',
			},
			{
				name: 'job posts',
				href: 'jobBoard',
				icon: BriefcaseIcon,
				current: currentTab === 'job posts',
			},
		];
	}

	if (currentUser) {
		return (
			<>
				<div>
					<Transition.Root
						show={sidebarOpen}
						as={Fragment}>
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
													onClick={() =>
														setSidebarOpen(false)
													}>
													<span className="sr-only">
														Close sidebar
													</span>
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
															{navigation.map(
																item => (
																	<li
																		key={
																			item.name
																		}>
																		<Link
																			to={
																				item.href
																			}
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
																)
															)}
														</ul>
													</li>
												</ul>
											</nav>
											<Link to={'/'}>
												<button
													type="button"
													className="rounded-md border border-solid border-black bg-black px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg">
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
						<div className="h-16 shrink-0 items-center mb-10">
							<a href="/" className="">
								<img
									className="h-16 w-auto ml-10"
									src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_wht_blue_ca0ot0.png"
									alt="DM Logo"
								/>
							</a>
						</div>
						<div className="flex absolute items-center justify-center align-middle flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-indigo-800 to-indigo-950 px-16 py-20 pl-20 pb-60 min-h-80 rounded-2xl shadow-2xl shadow-blue-500/30 top-28 -left-5">
							<nav className="flex flex-1 flex-col">
								<ul className="flex flex-1 flex-col gap-y-7">
									<li>
										<ul className="-mx-2 space-y-4">
											{navigation.map(item => (
												<li key={item.name}>
													<Link
														to={item.href}
														onClick={() =>
															setCurrentTab(
																item.name
															)
														}
														className={classNames(
															item.current
																? 'bg-gradient-to-r from-indigo-900 to-indigo-700 text-white shadow-lg shadow-blue-500/30 border border-blue-600'
																: 'text-indigo-200 hover:text-white hover:bg-indigo-700',
															'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
														)}>
														<item.icon
															className={classNames(
																item.current
																	? 'text-white'
																	: 'text-indigo-200 group-hover:text-white',
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
							</nav>
						</div>
					</div>

					<div className="lg:pl-72">
						<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white bg-opacity-90 backdrop-blur px-4 sm:gap-x-6 sm:px-6 lg:px-8">
							<button
								type="button"
								className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
								onClick={() =>
									setSidebarOpen(true)
								}>
								<span className="sr-only">
									Open sidebar
								</span>
								<Bars3Icon
									className="h-6 w-6"
									aria-hidden="true"
								/>
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
									<Menu
										as="div"
										className="relative">
										<Menu.Button className="-m-1.5 flex items-center p-1.5">
											<span className="sr-only">
												Open user menu
											</span>
											<img
												className="h-8 w-8 rounded-full bg-gray-50"
												src={
													currentUser.profileImg
												}
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
													className="rounded-md border border-solid border-black bg-black px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg">
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
