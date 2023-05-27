import {useState} from 'react';
import {Dialog} from '@headlessui/react';
import {
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';

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

export default function Hero() {
	const [mobileMenuOpen, setMobileMenuOpen] =
		useState(false);

	return (
		<div className="bg-white">
			<header className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-90 border-b backdrop-blur">
				<nav
					className="flex items-center justify-between p-2 lg:px-8"
					aria-label="Global">
					<div className="flex lg:flex-1">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">
								DevelopMe
							</span>
							<img
								className="w-auto h-20"
								src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_wht_blue_ca0ot0.png"
								alt="dm_logo"
							/>
						</a>
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
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map(item => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm font-normal text-gray-600 py-2 px-3 bg-[#fafafa] rounded-lg hover:shadow-lg">
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end mr-10">
						<Link to={'/login'}>
							<button
								type="button"
								className="rounded-md border border-solid border-black bg-black px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg">
								Log in
							</button>
						</Link>
					</div>
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
									className="h-8 w-auto"
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
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map(item => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											{item.name}
										</a>
									))}
								</div>
								<div className="py-6">
									<Link
										to={'/login'}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										Log in
									</Link>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>

			<div className="relative isolate px-8">
				<div className="mx-auto max-w-6xl sm:py-48 lg:py-72">
					<div className="text-left justify-start">
						<h1 className="text-4xl font-extrabold tracking-wide text-gray-900">
							Learn and grow with help from
							<br />
							world-class mentors for free
						</h1>
						<p className="mt-6 text-base leading-6 text-gray-600">
							Book and meet over
							<strong> 16,736+ mentors </strong>
							for 1:1
							<br /> mentorship in our global
							community.
						</p>
						<hr className="mt-4 border-blue-500 w-16 border-2" />
					</div>
					{/* Blue Guy Avatar */}
					<div className="absolute top-[100px] right-[400px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
						<img
							className="h-24 w-24 rounded-full"
							src="https://adplist.org/photos/mentors/1.webp"
							alt="avatar"
						/>
					</div>
					{/* Blue Lady Avatar */}
					<div className="absolute top-[160px] right-[240px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-pulse">
						<img
							className="h-20 w-20 rounded-full"
							src="https://adplist.org/photos/mentors/2.webp"
							alt="avatar"
						/>
					</div>
					{/* Orange Guy Avatar */}
					<div className="absolute top-[260px] right-[600px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
						<img
							className="h-20 w-20 rounded-full"
							src="https://adplist.org/photos/mentors/3.webp"
							alt="avatar"
						/>
					</div>
					{/* Purple Lady Avatar */}
					<div className="absolute top-[330px] right-[280px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-float">
						<img
							className="h-40 w-40 rounded-full"
							src="https://adplist.org/photos/mentors/4.webp"
							alt="avatar"
						/>
					</div>
					{/* Pink Guy Avatar */}
					<div className="absolute top-[460px] right-[700px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-float">
						<img
							className="h-20 w-20 rounded-full"
							src="https://adplist.org/photos/mentors/5.webp"
							alt="avatar"
						/>
					</div>
					{/* White Lady Avatar */}
					<div className="absolute top-[530px] right-[420px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-pulse">
						<img
							className="h-20 w-20 rounded-full"
							src="https://adplist.org/photos/mentors/6.webp"
							alt="avatar"
						/>
					</div>
					{/* Pink Lady Avatar */}
					<div className="absolute top-[530px] right-[240px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
						<img
							className="h-24 w-24 rounded-full"
							src="https://adplist.org/photos/mentors/7.webp"
							alt="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
