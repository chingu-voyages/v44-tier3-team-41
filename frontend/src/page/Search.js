import React, {useState, useEffect} from 'react';
import MentorCard from '../components/MentorCard/MentorCard';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {
	getAllMentorsThunk,
	clearSearch,
} from '../store/mentor';

function Search() {
	const dispatch = useDispatch();
	const [searchfield, setSearchField] =
		useState('expertise');
	const [searchTerm, setSearchTerm] =
		useState('');
	const mentors = useSelector(
		state => state.mentor.search
	);

	useEffect(() => {
		dispatch(clearSearch());
	}, []);

	async function handleOnSubmit(e) {
		e.preventDefault();
		try {
			const body = {
				// [searchfield] is dynamically being passed to the body obj
				[searchfield]: searchTerm,
			};
			await dispatch(getAllMentorsThunk(body));
		} catch (err) {
			console.error(err.message);
		}
	}
	async function handleOnReset(e) {
		e.preventDefault();
		setSearchField('expertise');
		setSearchTerm('');
		dispatch(clearSearch());
	}

	return (
		<div>
			<div className="flex gap-x-4 bg-dark1 p-3 shadow-lg shadow-dark2/30 rounded-lg py-5 items-center justify-center ring-1 ring-offset-4 ring-offset-light2 ring-light4">
				<div className="justify-center align-middle items-center">
					<select
						id="searchField"
						name="searchField"
						className="block w-full rounded-md px-4 py-2 text-dark6 ring-1 ring-inset ring-dark4 focus:ring-2 focus:ring-dark2 sm:text-sm sm:leading-6 bg-dark3"
						value={searchfield}
						onChange={e =>
							setSearchField(e.target.value)
						}>
						<option value="expertise">
							expertise
						</option>
						<option value="role">role</option>
						<option value="company">
							company
						</option>
					</select>
				</div>
				<form className="w-full max-w-md lg:col-span-5">
					<div className="flex gap-x-4">
						<label
							htmlFor="search"
							className="sr-only">
							search
						</label>
						<input
							id="search"
							name="search"
							type="search"
							value={searchTerm}
							onChange={e =>
								setSearchTerm(e.target.value)
							}
							required
							className="min-w-0 flex-auto bg-dark3 border border-dark4 rounded-md px-3.5 py-2 text-light4 shadow-lg placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark3 sm:text-sm sm:leading-6"
						/>
						<button
							onClick={handleOnSubmit}
							className="flex-none rounded-md hover:bg-dark3 px-8 py-1 text-sm font-normal text-white shadow-lg bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark3 border border-black hover:border hover:border-dark4">
							Search
						</button>
						<button
							onClick={handleOnReset}
							className="flex-none rounded-md hover:bg-dark3 px-8 py-1 text-sm font-normal text-white shadow-lg bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark3 border border-black hover:border hover:border-dark4">
							Reset
						</button>
					</div>
				</form>
			</div>
			<div className="relative">
				<div
					className="absolute inset-0 flex items-center"
					aria-hidden="true">
					<div className="w-full border-t border-gray-300" />
				</div>
				<div className="relative flex justify-center my-5">
					<span className="bg-white px-6 py-2 text-sm font-normal tracking-wide text-slate-700 rounded-lg border">
						search results
					</span>
				</div>
			</div>
			<div>
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{mentors?.map((mentor, index) => (
						<MentorCard
							key={index}
							mentor={mentor}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Search;
