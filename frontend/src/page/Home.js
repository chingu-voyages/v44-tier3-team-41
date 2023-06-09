import React, { useState, useEffect } from 'react';
import Hero from '../components/Home/Hero';
import MiddleSection from '../components/Home/MiddleSection';
import Team from '../components/Home/Team';
import Footer from '../components/Home/Footer';
import { useSelector, useDispatch } from 'react-redux';
import Scroll from '../components/Home/Scroll';
import { getAllMentorsThunk } from '../store/mentor'

const HomePage = () => {
	const dispatch = useDispatch()
	const [mentors, setMentors] = useState('')
	const sessionUser = useSelector(
		state => state.session.user
	);

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getAllMentorsThunk()).then(res => setMentors(res.Mentors))
		}
		fetchData()
	}, [dispatch])

	return (
		<div className="flex flex-col">
			<Hero sessionUser={sessionUser} />
			<Scroll />
			<section>
				<MiddleSection
					sessionUser={sessionUser}
					mentors={mentors}
				/>
			</section>
			<section id="Team">
				<Team />
			</section>
			<section>
				<Footer />
			</section>
		</div>
	);
};

export default HomePage;
