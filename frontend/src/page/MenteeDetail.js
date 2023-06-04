import {
	PaperAirplaneIcon,
	UserIcon,
} from '@heroicons/react/20/solid';
import React from 'react';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';

const MenteeDetail = () => {
	const data = useLocation();
	const mentee = data.state;

	if (mentee)
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
												src={mentee.profileImg}
												alt=""
											/>
										</div>
										<div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
											<p className="text-lg font-bold text-light4">
												{mentee.name}
											</p>
											<p className="text-sm font-medium text-light1">
												{mentee.role}
											</p>
										</div>
									</div>
									<div className="mt-5 flex justify-center sm:mt-0">
										<Link
											to={
												'/dashboard/directMessage'
											}
											state={mentee}
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
								<h2 className="text-sm font-medium w-1/3 -mt-5 leading-7 bg-gradient-to-r from-[#092523] to-[#134E4A] shadow-md shadow-green-700/20 px-6 py-1 text-green-100 rounded-full">
									<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
									Mentee Information
								</h2>
								<p className="mt-1 ml-11 max-w-2xl text-xs text-dark5">
									Personal details
								</p>
							</div>
							<div className="border-t border-gray-100">
								<dl className="divide-y divide-gray-100">
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">
											About
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentee.about}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-dark1">
											Full name
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentee.name}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Occupation
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentee.occupation}
										</dd>
									</div>

									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Skills
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentee.skill}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Email address
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentee.email}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Goal
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentee.goal}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Location
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentee.city},{' '}
											{mentee.state},{' '}
											{mentee.country}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Contact
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											(+{mentee.countryCode}){' '}
											{mentee.phone}
										</dd>
									</div>
									<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Project
										</dt>
										<dd className="mt-1 text-xs leading-3 text-dark5 sm:col-span-2 sm:mt-0">
											{mentee.project}
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

export default MenteeDetail;
