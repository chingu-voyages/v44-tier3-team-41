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
			<div className="mb-4 z-10 bg-gradient-to-r from-[#092523] to-[#134E4A] shadow-lg shadow-green-700/20 w-1/4 rounded-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
				<h2 className="p-3 text-center text-green-100 font-normal text-sm tracking-wide">
					<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
					Mentee list
				</h2>
			</div>
			<div className="z-0">
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#fafafa] p-4 py-10 rounded-lg shadow-lg border border-light4">
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
