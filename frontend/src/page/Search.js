import React, {useEffect, useState} from 'react';
import MentorCard from '../components/MentorCard/MentorCard';
import {useSelector, useDispatch} from 'react-redux';
import {getAllMentorsThunk} from '../store/mentor';

function Search() {
	const [searchfield, setSearchField] = useState('expertise');
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState('');

	async function handleOnSubmit(e) {
		e.preventDefault();
		try {
			const body = {
				searchfield,
				searchTerm,
			};

			console.log(body);
		} catch (err) {
			console.error(err.message);
		}

		setSearchField('expertise');
		setSearchTerm('');
	}
	async function handleOnReset(e) {
		e.preventDefault();
		setSearchField('expertise');
		setSearchTerm('');
	}

	const dispatch = useDispatch();
	let mentors = useSelector(state => state.mentor.search);

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getAllMentorsThunk());
		};
		fetchData();
	}, [dispatch]);

	return (
		<div>
			<div className="flex gap-x-4">
				<div>
					<select
						id="searchField"
						name="searchField"
						className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
						value={searchfield}
						onChange={e => setSearchField(e.target.value)}>
						<option value="expertise">expertise</option>
						<option value="role">role</option>
						<option value="company">company</option>
					</select>
				</div>
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
							eearch
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
			<div>
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{mentors &&
						mentors.map((mentor, index) => (
							<MentorCard key={index} mentor={mentor} />
						))}
				</ul>
			</div>
		</div>
	);
}

export default Search;
