import {Player} from '@lottiefiles/react-lottie-player';
import React from 'react';

const AboutUs = () => {
	return (
		<div>
			<section className="bg-light1 text-dark1 rounded-xl shadow-lg">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
						<a
							href="/"
							class="bg-dark1 text-dark6 text-xs w-28 font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2 shadow-lg">
							<svg
								class="w-3 h-3 mr-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true">
								<path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
							</svg>
							Dashboard
						</a>
						<h1 className="text-5xl font-bold leading-none">
							Hello and{' '}
							<span className="text-dark5">
								welcome
							</span>{' '}
							👋
						</h1>
						<p className="mt-6 mb-8 text-base text-dark4">
							Use this website to connect with
							<strong>
								{' '}
								experienced mentors
							</strong>
							<br />
							from all over the world
						</p>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<Player
							autoplay
							loop
							src="https://assets7.lottiefiles.com/packages/lf20_gssu2dkm.json"
							style={{
								height: '400px',
							}}></Player>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
