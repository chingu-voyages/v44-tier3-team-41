import React, { useState, useEffect } from 'react';
import MenteeCard from '../components/MenteeCard/MenteeCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMenteesThunk } from '../store/mentee'

export default function MenteeList() {

	const [options, setOptions] = useState('all');
	const dispatch = useDispatch()
	const mentees = useSelector(state => state.mentee.search)

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getAllMenteesThunk())
		};
		fetchData()
	}, [dispatch]);

	if (mentees) {
		return (
			<div>
				<div>
					<select
						id="options"
						name="options"
						className="mt-2 block w-40 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
						value={options}
						onChange={e => setOptions(e.target.value)}>
						<option value="all">all</option>
						<option value="myMentees">myMentees</option>
					</select>
				</div>
				<div className="relative pt-10">
					<div
						className="absolute inset-0 flex items-center"
						aria-hidden="true">
						<div className="w-full border-t border-gray-300" />
					</div>
				</div>
				<div>
					<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{mentees &&
							mentees.map((mentee, index) => (
								<MenteeCard key={index} mentee={mentee} />
							))}
					</ul>
				</div>
			</div>
		);
	}
}
