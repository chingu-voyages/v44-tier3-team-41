import React from 'react';
import Hero from '../components/Home/Hero';
import MiddleSection from '../components/Home/MiddleSection';
import Team from '../components/Home/Team';
import Footer from '../components/Home/Footer';
import {useSelector} from 'react-redux';
import Scroll from '../components/Home/Scroll';

const HomePage = () => {
	const sessionUser = useSelector(
		state => state.session.user
	);

	return (
		<div className="flex flex-col">
			<Hero />
			<Scroll />
			<section>
				<MiddleSection
					sessionUser={sessionUser}
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
