import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getMenteeThunk} from '../store/mentee';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const MenteeDetail = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const mentee = useSelector(state => state.mentee.mentee);

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getMenteeThunk(id));
		};
		fetchData();
	}, [dispatch, id]);

	if (mentee)
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
												src={mentee.imageUrl}
												alt=""
											/>
										</div>
										<div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
											<p className="text-sm font-medium text-gray-600" />
											<p className="text-xl font-bold text-gray-900 sm:text-2xl">
												{mentee.name}
											</p>
											<p className="text-sm font-medium text-gray-600">
												{mentee.role}
											</p>
										</div>
									</div>
									<div className="mt-5 flex justify-center sm:mt-0">
										<Link
											to={'/dashboard/directMessage'}
											state={mentee}
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
									Mentee Information
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
											{mentee.about}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Full name
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentee.name}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Occupation
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentee.occupation}
										</dd>
									</div>

									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Skills
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentee.skill}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Email address
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentee.email}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Goal</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentee.goal}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Location
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{mentee.city}, {mentee.state}, {mentee.country}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">
											Project
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
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
