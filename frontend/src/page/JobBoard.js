import React, {useEffect, useState} from 'react';
import {ChevronRightIcon} from '@heroicons/react/20/solid';
import axios from 'axios';

function JobBoard() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);

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
			<div className="flex gap-x-4">
				<form className="w-full max-w-md lg:col-span-5 lg:pt-2 pb-5">
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
							className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
						<button
							onClick={handleOnSubmit}
							className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							search
						</button>
						<button
							onClick={handleOnReset}
							className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							reset
						</button>
					</div>
				</form>
			</div>
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-gray-300" />
				</div>
				<div className="relative flex justify-center">
					<span className="bg-white px-3 text-base font-semibold leading-6 text-gray-900">
						search results
					</span>
				</div>
			</div>
			<div className="pt-5">
				<ul className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
					{searchResult.map(item => (
						<li
							key={item.job_id}
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
										<a>
											<span className="absolute inset-x-0 -top-px bottom-0" />
											{item.job_title}
										</a>
									</p>
									<p className="mt-1 flex text-xs leading-5 text-gray-500">
										<p className="relative truncate hover:underline">
											{item.job_city}, {item.job_state}, {item.job_country}
										</p>
									</p>
								</div>
							</div>
							<div className="flex items-center gap-x-4">
								<div className="hidden sm:flex sm:flex-col sm:items-end">
									<p className="text-sm leading-6 text-gray-900">
										{item.employer_name}
									</p>
								</div>
								<ChevronRightIcon
									className="h-5 w-5 flex-none text-gray-400"
									aria-hidden="true"
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default JobBoard;
