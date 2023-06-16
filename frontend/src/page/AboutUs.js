import {Player} from '@lottiefiles/react-lottie-player';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import People from '../assets/People.json';

const AboutUs = () => {
	const navigate = useNavigate();
	const sessionUser = useSelector(
		state => state.session.user
	);

	if (!sessionUser) {
		return navigate('/login');
	}
	return (
		<div>
			<section className="bg-light1 text-dark1 rounded-xl shadow-lg">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
						<a
							href="/"
							className="bg-dark1 text-dark6 text-xs w-28 font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2 shadow-lg">
							<svg
								className="w-3 h-3 mr-1"
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
							<span className="text-mentor1">
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

			{/* More info */}
			<div className="container my-32 mx-auto md:px-6">
				<section className="mb-32">
					<div className="flex flex-wrap">
						<div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
							<p className="mb-6 font-bold uppercase text-gray-400">
								Features
							</p>
							<h2 className="mb-6 text-3xl font-bold">
								Why is it so
								<u className="text-mentor1">
									{' '}
									great?
								</u>
							</h2>

							<p className="mb-12 text-dark4 text-sm">
								If you’re looking for advice,
								jamming or networking -
								<strong> DevelopMe </strong>
								lets you freely schedule a 1:1
								mentorship session in fun new ways
								and work with them directly.
							</p>
						</div>

						<div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
							<div className="flex flex-wrap">
								<div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
									<div className="flex">
										<div className="shrink-0">
											<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													className="h-6 w-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
													/>
												</svg>
											</div>
										</div>
										<div className="ml-4 grow text-xs text-dark4">
											<p className="mb-3 font-bold text-sm text-dark2">
												Connect with Mentors
											</p>
											<p>
												Our platform facilitates
												seamless connections
												between developers and
												mentors.
											</p>
											<p className="pt-2">
												Developers can find
												experienced mentors who
												can offer valuable
												insights, advice, and
												support throughout their
												journey.
											</p>
										</div>
									</div>
								</div>

								<div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
									<div className="flex">
										<div className="shrink-0">
											<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													className="h-6 w-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
													/>
												</svg>
											</div>
										</div>
										<div className="ml-4 grow text-xs text-dark4">
											<p className="mb-3 font-bold text-sm text-dark2">
												Video Calls
											</p>
											<p>
												To enhance the mentoring
												experience, we provide a
												video call feature.
											</p>
											<p className="pt-2">
												This allows developers and
												mentors to have
												face-to-face interactions,
												fostering effective
												communication and
												personalized guidance.
											</p>
										</div>
									</div>
								</div>

								<div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
									<div className="flex">
										<div className="shrink-0">
											<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													className="h-6 w-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
													/>
												</svg>
											</div>
										</div>
										<div className="ml-4 grow text-xs text-dark4">
											<p className="mb-3 font-bold text-sm text-dark2">
												Ai Chat
											</p>
											<p>
												Our website includes Ali
												Chat, a built-in chat
												feature designed
												specifically for
												developers and mentors.
											</p>
											<p className="pt-2">
												It enables real-time
												messaging, making it
												convenient for users to
												ask questions, seek
												advice, and engage in
												meaningful discussions.
											</p>
										</div>
									</div>
								</div>

								<div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
									<div className="flex">
										<div className="shrink-0">
											<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													className="h-6 w-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
													/>
												</svg>
											</div>
										</div>
										<div className="ml-4 grow text-xs text-dark4">
											<p className="mb-3 font-bold text-sm text-dark2">
												Job Search
											</p>
											<p className="">
												In addition to mentorship,
												we understand the
												importance of career
												growth. Our website offers
												a job search feature that
												connects developers with
												relevant job
												opportunities.
											</p>
											<p className="pt-2">
												This helps developers
												explore new career
												prospects and find
												suitable positions within
												the industry.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* Contact */}
			<div className="container mx-auto md:px-6">
				<section className="mb-2">
					<div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
					<div className="container px-6 md:px-12">
						<div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-12 md:px-12 -mt-[100px] backdrop-blur-[30px]">
							{/* Team Info */}
							<div className="container mx-auto md:px-6">
								<section className="mb-8">
									<div className="flex justify-center">
										<div className="text-center md:max-w-xl lg:max-w-3xl">
											<h2 className="px-6 text-xl font-bold">
												Contact us
											</h2>
										</div>
									</div>

									<div className="flex flex-wrap">
										<div className="mb-2 w-full md:w-12/12">
											<Player
												autoplay
												loop
												src="https://assets2.lottiefiles.com/packages/lf20_v7gj8hb1.json"
												style={{
													height: '300px',
												}}></Player>
										</div>
										<div className="w-full -mt-10">
											<div className="mx-auto grid gap-x-4 px-2 text-center">
												<div className="grid grid-cols-1 lg:grid-cols-3">
													{People.map(person => (
														<div
															key={person.name}
															className="ml-2 grow mt-6 bg-light1 border p-5 rounded-lg">
															<h4 className="mb-1 font-medium text-base text-dark2 whitespace-nowrap">
																{person.name}
															</h4>
															<div className="text-dark5 text-xs">
																<p>
																	{person.role}
																</p>
																<p>
																	{person.email}
																</p>
																<ul className="mt-2 flex gap-x-3 items-center justify-center">
																	<li className="flex">
																		<a
																			href={
																				person.githubUrl
																			}
																			className="text-gray-400 hover:text-gray-500"
																			target="_blank"
																			rel="noreferrer">
																			<span className="sr-only">
																				GitHub
																			</span>
																			<svg
																				className="h-4 w-4"
																				aria-hidden="true"
																				fill="currentColor"
																				viewBox="0 0 25 25">
																				<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
																			</svg>
																		</a>
																	</li>
																	<li>
																		<a
																			href={
																				person.linkedinUrl
																			}
																			className="text-gray-400 hover:text-gray-500"
																			target="_blank"
																			rel="noreferrer">
																			<span className="sr-only">
																				LinkedIn
																			</span>
																			<svg
																				className="h-4 w-4"
																				aria-hidden="true"
																				fill="currentColor"
																				viewBox="0 0 20 20">
																				<path
																					fillRule="evenodd"
																					d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
																					clipRule="evenodd"
																				/>
																			</svg>
																		</a>
																	</li>
																</ul>
															</div>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutUs;
