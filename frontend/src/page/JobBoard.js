import React, { useState } from 'react';
import { MapPinIcon, CheckCircleIcon } from '@heroicons/react/20/solid';
import axios from 'axios';

function JobBoard() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [currentJob, setCurrentJob] = useState(null);
	console.log(currentJob);

	async function handleOnSubmit(event) {
		event.preventDefault();

		const options = {
			method: 'GET',
			url: 'https://jsearch.p.rapidapi.com/search',
			params: {
				query: searchTerm,
			},
			headers: {
				'X-RapidAPI-Key': 'f67d8c10f4msh1893221b32f3c59p1d0e4ajsnf8c0bddeff87',
				'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
			},
		};

		try {
			const response = await axios.request(options);
			setSearchResult(response.data.data);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	function handleOnReset(event) {
		setSearchTerm('');
		setSearchResult([]);
		setCurrentJob(null);
	}

	const checkImageURL = url => {
		if (!url) return false;
		else {
			const pattern = new RegExp(
				'^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
				'i'
			);
			return pattern.test(url);
		}
	};
	return (
		<div>
			<div className="flex gap-x-4 bg-dark1 p-3 shadow-lg shadow-dark2/30 rounded-lg py-5 items-center justify-center ring-1 ring-offset-4 ring-offset-light2 ring-light4">
				<div className="flex gap-x-4">
					<form className="w-full max-w-md lg:col-span-5">
						<div className="flex gap-x-4">
							<label htmlFor="search" className="sr-only">
								search
							</label>
							<input
								id="search"
								name="search"
								type="search"
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
								required
								className="min-w-0 flex-auto rounded-md bg-dark3 border border-dark4 px-3.5 py-2 text-light4 shadow-sm ring-1 ring-inset ring-dark4 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							<button
								onClick={handleOnSubmit}
								className="flex-none rounded-md hover:bg-dark3 px-8 py-1 text-sm font-normal text-white shadow-lg bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-black hover:border hover:border-dark4">
								Search
							</button>
							<button
								onClick={handleOnReset}
								className="flex-none rounded-md hover:bg-dark3 px-8 py-1 text-sm font-normal text-white shadow-lg bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Reset
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-gray-300" />
				</div>
				<div className="relative flex justify-center my-5">
					<span className="bg-white px-6 py-2 text-sm font-normal tracking-wide text-slate-700 rounded-lg border">
						search results
					</span>
				</div>
			</div>
			<div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
				<aside className="sticky top-8 w-80 hidden shrink-0 lg:block">
					<div>
						<ul className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
							{searchResult.map(item => (
								<li
									key={item.job_id}
									onClick={() => setCurrentJob(item)}
									className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
									<div className="flex gap-x-4">
										<img
											className="h-12 w-12 flex-none rounded-full bg-gray-50"
											src={
												checkImageURL(item?.employer_logo)
													? item.employer_logo
													: 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
											}
											alt="Logo"
										/>
										<div className="min-w-0 flex-auto">
											<p className="text-sm font-semibold leading-6 text-gray-900">
												<p>
													<span className="absolute inset-x-0 -top-px bottom-0" />
													{item.job_title}
												</p>
											</p>
											<p className="mt-1 flex text-xs leading-5 text-gray-500">
												<p className="relative truncate hover:underline">
													{item.job_city}, {item.job_state}, {item.job_country}
												</p>
											</p>
											<p className="mt-1 flex text-xs leading-5 text-gray-500">
												<p className="text-sm leading-6 text-gray-900">
													{item.employer_name}
												</p>
											</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</aside>

				{currentJob ? (
					<main className="flex-1">
						<img
							src={
								checkImageURL(currentJob?.employer_logo)
									? currentJob.employer_logo
									: 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
							}
							alt=""
							className="h-40 flex-none rounded-lg"
						/>

						<div>
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-semibold leading-7 text-gray-900">
									{currentJob.job_title}
								</h3>
							</div>

							<button
								type="button"
								onClick={() =>
									window.open(
										currentJob?.job_google_link ??
										'https://careers.google.com/jobs/results/',
										'_blank'
									)
								}
								className="rounded-md border border-solid border-black bg-black px-4 py-2 text-xs font-normal text-gray-200 hover:bg-gray-700 shadow-lg">
								apply for the job
							</button>

							<div className="mt-6 border-t border-gray-100">
								<dl className="divide-y divide-gray-100">
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">
											comany name
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{currentJob.employer_name}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">
											location
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											<MapPinIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
											{currentJob.job_city}, {currentJob.job_state},{' '}
											{currentJob.job_country}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">
											about the job:
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{currentJob.job_description}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">
											qualifications
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											<ul>
												{currentJob.job_highlights.Qualifications &&
													currentJob.job_highlights.Qualifications.map(
														(item, index) => (
															<li>
																<CheckCircleIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
																{item}
															</li>
														)
													)}
											</ul>
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">
											responsibilities
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{currentJob.job_highlights.Responsibilities &&
												currentJob.job_highlights.Responsibilities.map(
													(item, index) => <li>{item}</li>
												)}
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</main>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}

export default JobBoard;
