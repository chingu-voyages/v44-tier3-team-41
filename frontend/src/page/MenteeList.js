import React, {useState, useEffect} from 'react';
import MenteeCard from '../components/MenteeCard/MenteeCard';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {getAllMenteesThunk} from '../store/mentee';
import {UserIcon} from '@heroicons/react/24/outline';

export default function MenteeList() {
	const [options, setOptions] = useState('all');
	const dispatch = useDispatch();
	const mentees = useSelector(
		state => state.mentee.search
	);

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getAllMenteesThunk());
		};
		fetchData();
	}, [dispatch]);

	return (
		<div>
			<div className="mb-4 z-10 bg-gradient-to-r from-green-700 to-green-950 shadow-lg shadow-green-700/20 w-1/4 rounded-lg">
				<h2 className="p-3 text-center text-green-100 font-normal text-sm tracking-wide">
					<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
					Mentee list
				</h2>
			</div>
			<div className="z-0">
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#fafafa] p-4 py-10 rounded-lg shadow-lg ">
					{mentees?.map((mentee, index) => (
						<MenteeCard
							key={index}
							mentee={mentee}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}
