import {PaperAirplaneIcon, UserIcon} from '@heroicons/react/20/solid';
import React from 'react';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';

const MentorDetail = () => {
	const data = useLocation();
	const mentor = data.state;

	if (mentor)
		return (
			<div className="flex flex-col">
				<div className="bg-light1 rounded-lg shadow-lg">
					<div className="flex min-h-full flex-1 flex-col justify-center py-8 sm:px-6 lg:px-8">
						<div className="overflow-hidden rounded-lg bg-white shadow">
							<h2
								className="sr-only"
								id="profile-overview-title">
								Profile Overview
							</h2>
							<div className="bg-dark2 p-4">
								<div className="sm:flex sm:items-center sm:justify-evenly">
									<div className="sm:flex sm:space-x-5 items-center">
										<div className="flex-shrink-0">
											<img
												className="mx-auto h-20 w-20 rounded-full shadow-lg border-4 border-white object-cover"
												src={mentor.profileImg}
												alt=""
											/>
										</div>
										<div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left align-middle">
											<p className="text-lg font-bold text-light4">
												{mentor.name}
											</p>
											<p className="text-xs font-medium text-dark6">
												{mentor.role}
											</p>
										</div>
									</div>
									<div className="mt-5 flex justify-center sm:mt-0">
										<Link
											to={'/dashboard/directMessage'}
											state={mentor}
											className="flex rounded-md hover:bg-dark3 md:px-8 px-4 py-2 text-sm font-normal text-white shadow-lg bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark3 border hover:border hover:border-dark4 border-dark4">
											Message
											<PaperAirplaneIcon className="w-4 h-4 align-text-bottom -rotate-45 ml-2" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
						<div className="bg-white shadow sm:rounded-lg">
							<div className="px-4 py-6 sm:px-6 -mt-4">
								<h2 className="text-sm font-medium w-1/3 -mt-5 leading-7 bg-gradient-to-r from-dark1 to-dark3 shadow-lg shadow-mentor4/20 px-6 py-1 text-blue-100 rounded-full">
									<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
									Mentor Information
								</h2>
								<p className="mt-1 ml-11 max-w-2xl text-xs text-dark5">
									Personal details
								</p>
							</div>
							<div className="border-t border-gray-100">
								<dl className="divide-y divide-gray-100">
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">About</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentor.about}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">
											Full name
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentor.name}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">Company</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentor.company}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">Role</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentor.role}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">
											Expertise
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentor.expertise}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">
											Email address
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentor.email}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">
											Years experience
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentor.yrsExp}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">Location</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentor.city}, {mentor.state}, {mentor.country}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">Contact</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											(+{mentor.countryCode}) {mentor.phone}
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default MentorDetail;
