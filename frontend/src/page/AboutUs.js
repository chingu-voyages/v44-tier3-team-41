import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
	const navigate = useNavigate()
	const sessionUser = useSelector(state => state.session.user)

	if (!sessionUser) { return navigate('/login') }
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
			<div class="container my-32 mx-auto md:px-6">
				<section class="mb-32">
					<div class="flex flex-wrap">
						<div class="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
							<p class="mb-6 font-bold uppercase text-gray-400">
								Features
							</p>
							<h2 class="mb-6 text-3xl font-bold">
								Why is it so
								<u class="text-mentor1">
									{' '}
									great?
								</u>
							</h2>

							<p class="mb-12 text-dark4 text-sm">
								If you’re looking for advice,
								jamming or networking -
								<strong> DevelopMe </strong>
								lets you freely schedule a 1:1
								mentorship session in fun new ways
								and work with them directly.
							</p>
						</div>

						<div class="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
							<div class="flex flex-wrap">
								<div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
									<div class="flex">
										<div class="shrink-0">
											<div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													class="h-6 w-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
													/>
												</svg>
											</div>
										</div>
										<div class="ml-4 grow text-xs text-dark4">
											<p class="mb-3 font-bold text-sm text-dark2">
												Connect with Mentors
											</p>
											<p>
												Our platform facilitates
												seamless connections
												between developers and
												mentors.
											</p>
											<p class="pt-2">
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

								<div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
									<div class="flex">
										<div class="shrink-0">
											<div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													class="h-6 w-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
													/>
												</svg>
											</div>
										</div>
										<div class="ml-4 grow text-xs text-dark4">
											<p class="mb-3 font-bold text-sm text-dark2">
												Video Calls
											</p>
											<p>
												To enhance the mentoring
												experience, we provide a
												video call feature.
											</p>
											<p class="pt-2">
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

								<div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
									<div class="flex">
										<div class="shrink-0">
											<div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													class="h-6 w-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
													/>
												</svg>
											</div>
										</div>
										<div class="ml-4 grow text-xs text-dark4">
											<p class="mb-3 font-bold text-sm text-dark2">
												Ai Chat
											</p>
											<p>
												Our website includes Ali
												Chat, a built-in chat
												feature designed
												specifically for
												developers and mentors.
											</p>
											<p class="pt-2">
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

								<div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
									<div class="flex">
										<div class="shrink-0">
											<div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													class="h-6 w-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
													/>
												</svg>
											</div>
										</div>
										<div class="ml-4 grow text-xs text-dark4">
											<p class="mb-3 font-bold text-sm text-dark2">
												Job Search
											</p>
											<p class="">
												In addition to mentorship,
												we understand the
												importance of career
												growth. Our website offers
												a job search feature that
												connects developers with
												relevant job
												opportunities.
											</p>
											<p class="pt-2">
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
			<div class="container my-24 mx-auto md:px-6">
				<section class="mb-32">
					<div class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
					<div class="container px-6 md:px-12">
						<div class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
							<div class="flex flex-wrap">
								<div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
									<form>
										<div
											class="relative mb-6 border border-light1 rounded-lg"
											data-te-input-wrapper-init>
											<input
												type="text"
												class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none placeholder:text-dark3 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="exampleInput90"
												placeholder="Name"
											/>
											<label
												class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  peer-focus:text-primary"
												for="exampleInput90">
												Name
											</label>
										</div>
										<div
											class="relative mb-6 border border-light4 rounded-lg"
											data-te-input-wrapper-init>
											<input
												type="email"
												class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="exampleInput91"
												placeholder="Email address"
											/>
											<label
												class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-sm peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-sm"
												for="exampleInput91">
												Email address
											</label>
										</div>
										<div
											class="relative mb-6 border border-light4 rounded-lg"
											data-te-input-wrapper-init>
											<textarea
												class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="exampleFormControlTextarea1"
												rows="3"
												placeholder="Your message"></textarea>
											<label
												for="exampleFormControlTextarea1"
												class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary">
												Message
											</label>
										</div>
										<div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
											<input
												class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent  dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
												type="checkbox"
												value=""
												id="exampleCheck96"
												checked
											/>
											<label
												class="inline-block pl-[0.15rem] hover:cursor-pointer text-xs"
												for="exampleCheck96">
												Send me a copy of this
												message
											</label>
										</div>
										<button
											type="button"
											data-te-ripple-init
											data-te-ripple-color="light"
											class="mb-6 inline-block w-full rounded bg-dark2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-dark1 focus:outline-none focus:ring-0  lg:mb-0">
											Send
										</button>
									</form>
								</div>
								<div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
									<div class="flex flex-wrap">
										<div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
											<div class="flex items-start">
												<div class="shrink-0">
													<div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															class="h-6 w-6">
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
															/>
														</svg>
													</div>
												</div>
												<div class="ml-6 grow text-xs text-dark4">
													<p class="mb-1 font-bold text-sm text-dark2">
														Alex Hunt
													</p>
													<p class="">
														support@example.com
													</p>
													<p class="">
														+1 234-567-89
													</p>
												</div>
											</div>
										</div>
										<div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
											<div class="flex items-start">
												<div class="shrink-0">
													<div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															class="h-6 w-6">
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
															/>
														</svg>
													</div>
												</div>
												<div class="ml-6 grow text-xs text-dark4">
													<p class="mb-1 font-bold text-sm text-dark2">
														Yi Lin
													</p>
													<p class="">
														sales@example.com
													</p>
													<p class="">
														+1 234-567-89
													</p>
												</div>
											</div>
										</div>
										<div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
											<div class="align-start flex">
												<div class="shrink-0">
													<div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															class="h-6 w-6">
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
															/>
														</svg>
													</div>
												</div>
												<div class="ml-6 grow text-xs text-dark4">
													<p class="mb-1 font-bold text-sm text-dark2">
														Ali Mora
													</p>
													<p class="">
														press@example.com
													</p>
													<p class="">
														+1 234-567-89
													</p>
												</div>
											</div>
										</div>
										<div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
											<div class="align-start flex">
												<div class="shrink-0">
													<div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															class="h-6 w-6">
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
															/>
														</svg>
													</div>
												</div>
												<div class="ml-6 grow text-xs text-dark4">
													<p class="mb-1 font-bold text-sm text-dark2">
														GitHub Repo
													</p>
													<p class="">
														bugs@example.com
													</p>
													<p class="">
														+1 234-567-89
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutUs;
