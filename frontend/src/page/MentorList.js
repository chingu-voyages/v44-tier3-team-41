import React, {useEffect} from 'react';

import MentorCard from '../components/MentorCard/MentorCard';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {getAllMentorsThunk} from '../store/mentor';
import {UserIcon} from '@heroicons/react/24/outline';

export default function MentorList() {
	const dispatch = useDispatch();
	const mentors = useSelector(
		state => state.mentor.search
	);

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getAllMentorsThunk());
		};
		fetchData();
	}, [dispatch]);

	return (
		<div>
			<div className="mb-4 z-10 bg-gradient-to-r from-indigo-700 to-indigo-950 shadow-lg shadow-indigo-700/30 w-1/4 rounded-lg">
				<h2 className="p-3 text-center text-indigo-100 font-normal text-sm tracking-wide">
					<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
					Mentor list
				</h2>
			</div>
			<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#fafafa] p-4 py-10 rounded-lg shadow-lg">
				{mentors?.map((mentor, index) => (
					<MentorCard
						key={index}
						mentor={mentor}
					/>
				))}
			</ul>
		</div>
	);
}
