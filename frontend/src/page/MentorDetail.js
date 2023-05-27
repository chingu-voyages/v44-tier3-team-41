import React from 'react';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';

const MentorDetail = () => {
	const data = useLocation();
	const mentor = data.state;

	if (mentor)
		return (
			<div className="flex flex-col">
				<div className="bg-gray-300">
					<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
						<div className="overflow-hidden rounded-lg bg-white shadow">
							<h2 className="sr-only" id="profile-overview-title">
								Profile Overview
							</h2>
							<div className="bg-white p-6">
								<div className="sm:flex sm:items-center sm:justify-between">
									<div className="sm:flex sm:space-x-5">
										<div className="flex-shrink-0">
											<img
												className="mx-auto h-20 w-20 rounded-full"
												src={mentor.profileImg}
												alt=""
											/>
										</div>
										<div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
											<p className="text-sm font-medium text-gray-600" />
											<p className="text-xl font-bold text-gray-900 sm:text-2xl">
												{mentor.name}
											</p>
											<p className="text-sm font-medium text-gray-600">
												{mentor.role}
											</p>
										</div>
									</div>
									<div className="mt-5 flex justify-center sm:mt-0">
										<Link
											to={'/dashboard/directMessage'}
											state={mentor}
											className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
											Message
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
						<div className="overflow-hidden bg-white shadow sm:rounded-lg">
							<div className="px-4 py-6 sm:px-6">
								<h3 className="text-base font-semibold leading-7 text-gray-900">
									Mentor Information
								</h3>
								<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
									Personal details
								</p>
							</div>
							<div className="border-t border-gray-100">
								<dl className="divide-y divide-gray-100">
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">About</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentor.about}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Full name
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentor.name}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Company
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentor.company}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Role</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentor.role}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Expertise
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentor.expertise}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Email address
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentor.email}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											years of experience
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentor.yrsExp}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Location
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentor.city}, {mentor.state}, {mentor.country}
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
