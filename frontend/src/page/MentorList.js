import React, {useEffect} from 'react';

import MentorCard from '../components/MentorCard/MentorCard';
import {useSelector, useDispatch} from 'react-redux';
import {getAllMentorsThunk} from '../store/mentor';

export default function MentorList() {
	const dispatch = useDispatch();
	const mentors = useSelector(state => state.mentor.search);

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getAllMentorsThunk());
		};
		fetchData();
	}, [dispatch]);

	if (mentors) {
		return (
			<div>
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{mentors &&
						mentors.map((mentor, index) => (
							<MentorCard key={index} mentor={mentor} />
						))}
				</ul>
			</div>
		);
	}
}
