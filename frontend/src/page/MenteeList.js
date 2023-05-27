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


	return (
		<div>
			<div className="relative">
				<div
					className="absolute inset-0 flex items-center"
					aria-hidden="true">
					<div className="w-full border-t border-gray-300" />
				</div>
			</div>
			<div>
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{mentees?.map((mentee, index) => (
						<MenteeCard key={index} mentee={mentee} />
					))}
				</ul>
			</div>
		</div>
	);

}
