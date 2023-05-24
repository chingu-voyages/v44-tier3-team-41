import Banner from '../components/MentorDetail/Banner';
import DetailCard from '../components/MentorDetail/DetailCard';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getMentorThunk } from '../store/mentor';
import { useParams } from 'react-router-dom';

const MentorDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const mentor = useSelector(state => state.mentor.mentor);

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getMentorThunk(id));
		};
		fetchData();
	}, [dispatch, id]);

	if (mentor)

		return (
			<div className="flex flex-col">
				<div className="bg-gray-300">
					<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
						<Banner mentor={mentor} />
					</div>
					<div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
						<DetailCard mentor={mentor} />
					</div>
				</div>
			</div>
		);

};

export default MentorDetail;
