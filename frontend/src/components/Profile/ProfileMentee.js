import React, {useState} from 'react';
import {CheckCircleIcon} from '@heroicons/react/20/solid';
import axios from 'axios';
import {UserIcon} from '@heroicons/react/24/outline';

export default function ProfileMentee({
	currentUser,
}) {
	console.log(currentUser);
	const [name, setName] = useState(
		currentUser.name
	);
	const [about, setAbout] = useState(
		currentUser.about
	);
	const [occupation, setOccupation] = useState(
		currentUser.occupation
	);
	const [skill, setSkill] = useState(
		currentUser.skill
	);
	const [goal, setGoal] = useState(
		currentUser.goal
	);
	const [project, setProject] = useState(
		currentUser.project
	);
	const [image, setImage] = useState('');
	const [imagePreview, setImagePreview] =
		useState(currentUser.profileImg);
	const [country, setCountry] = useState(
		currentUser.country
	);
	const [city, setCity] = useState(
		currentUser.city
	);
	const [state, setState] = useState(
		currentUser.state
	);

	const [success, setSuccess] = useState(false);

	function handleImageChange(event) {
		const {files} = event.target;
		if (files.length !== 0) {
			setImage(prevState => files[0]);
			setImagePreview(
				URL.createObjectURL(files[0])
			);
		}
	}

	async function handleImageUpload() {
		try {
			const data = new FormData();
			data.append('file', image);
			data.append('upload_preset', 'purchaseApp');
			const response = await axios.post(
				'https://api.cloudinary.com/v1_1/yilin1234/image/upload',
				data
			);
			return response.data.secure_url;
		} catch (error) {
			console.error(error);
		}
	}

	async function handleOnUpdate(e) {
		e.preventDefault();
		try {
			if (image === '') {
				const body = {
					name: name,
					about: about,
					occupation: occupation,
					skill: skill,
					goal: goal,
					project: project,
					country: country,
					city: city,
					state: state,
					profileImg: imagePreview,
				};
				console.log(body);
			} else {
				const imageUrl =
					await handleImageUpload();
				const body = {
					name: name,
					about: about,
					occupation: occupation,
					skill: skill,
					goal: goal,
					project: project,
					country: country,
					city: city,
					state: state,
					profileImg: imageUrl,
				};
				console.log(body);
			}

			// updatePurchaseById(id, body);
			// console.log(body);
			setSuccess(true);
		} catch (err) {
			console.error(err.message);
		}

		setName('');
		setAbout('');
		setOccupation('');
		setSkill('');
		setGoal(0);
		setProject('');
		setImage('');
		setImagePreview('');
		setCountry('');
		setCity('');
		setState('');
	}

	return (
		<forsetSkillm>
			<div className="bg-[#fafafa] p-8 rounded-lg shadow-lg mt-4">
				<div className="space-y-12">
					<div className="border-b border-gray-900/10">
						{/* Profile Heading */}
						<div className="p-2 pl-6 bg-[#1F2937] rounded-lg shadow-md w-1/2 -mt-12">
							<h2 className="text-sm font-medium w-1/3 -mt-5 leading-7 bg-green-800 px-4 py-1 text-green-300 rounded-full shadow-lg shadow-green-700/20">
								<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
								Mentee Profile
							</h2>
							<p className="text-xs leading-6 text-slate-400 pl-5">
								This information will be displayed
								publicly so be careful what you
								share
							</p>
						</div>
						{/* Info div */}
						<div className="flex flex-row space-x-10 mt-10">
							{/* Left div */}
							<div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 w-1/2">
								{/* Name */}
								<div className="sm:col-span-4">
									<label
										htmlFor="name"
										className="block text-xs font-normal leading-2 text-gray-500">
										Name & Surname
									</label>
									<div className="mt-1">
										<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
											<input
												type="text"
												name="username"
												id="username"
												autoComplete="username"
												className="block flex-1 bg-white rounded-md shadow-md py-2 pl-2 text-gray-400 placeholder:text-gray-600 text-xs leading-2"
												placeholder="John Smith"
												value="John Smith"
											/>
										</div>
									</div>
								</div>
								{/* About */}
								<div className="col-span-full">
									<label
										htmlFor="about"
										className="block text-xs font-normal leading-2 text-gray-500">
										More about me
									</label>
									<div className="mt-1">
										<textarea
											id="about"
											name="about"
											rows={3}
											className="block w-full rounded-md shadow-md pl-3 py-1.5 text-gray-600 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xs sm:leading-6"
											value={about}
											onChange={e =>
												setAbout(e.target.value)
											}
										/>
									</div>
									<p className="mt-1 pl-3 text-xs leading-6 text-gray-400">
										Write a few sentences about
										yourself
									</p>
								</div>
								{/* Profile image */}
								<div className="col-span-full">
									<label
										htmlFor="cover-photo"
										className="block text-sm font-semibold text-gray-600">
										Profile Image
									</label>
									<div className="mt-1 text-xs text-gray-500 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
										<label htmlFor="image">
											image:
										</label>
										<input
											className="form-control"
											type="file"
											name="image"
											onChange={handleImageChange}
											required
										/>
										{imagePreview && (
											<img
												className="mx-auto d-block h-[130px] w-[130px] rounded-full object-cover border-[8px] border-white shadow-lg"
												src={imagePreview}
												alt="preview"
											/>
										)}
									</div>
								</div>
							</div>
							{/* Right div */}

							<div className="border-gray-900/10 pb-12 w-1/2">
								{/* Work div */}
								<div className="col-span-full">
									<div className="col-span-full">
										<label
											htmlFor="occupation"
											className="block text-xs font-normal leading-2 text-gray-500">
											Occupation
										</label>
										<div className="mt-1">
											<textarea
												id="occupation"
												name="occupation"
												rows={2}
												className="block w-full rounded-md shadow-md pl-3 py-1.5 text-gray-600 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xs sm:leading-6"
												value={occupation}
												onChange={e =>
													setOccupation(
														e.target.value
													)
												}
											/>
										</div>
									</div>

									<div className="col-span-full mt-4">
										<label
											htmlFor="skills"
											className="block text-xs font-normal leading-2 text-gray-500">
											Skills
										</label>
										<div className="mt-1">
											<textarea
												id="skills"
												name="skills"
												rows={2}
												className="block w-full rounded-md shadow-md pl-3 py-1.5 text-gray-600 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xs sm:leading-6"
												value={skill}
												onChange={e =>
													setSkill(e.target.value)
												}
											/>
										</div>
									</div>
									<div className="col-span-full mt-4">
										<label
											htmlFor="goals"
											className="block text-xs font-normal leading-2 text-gray-500">
											Goals
										</label>
										<div className="mt-1">
											<textarea
												id="goals"
												name="goals"
												rows={2}
												className="block w-full rounded-md shadow-md pl-3 py-1.5 text-gray-600 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xs sm:leading-6"
												value={goal}
												onChange={e =>
													setGoal(e.target.value)
												}
											/>
										</div>
									</div>
									<div className="col-span-full mt-4">
										<label
											htmlFor="projects"
											className="block text-xs font-normal leading-2 text-gray-500">
											Projects
										</label>
										<div className="mt-1">
											<textarea
												id="projects"
												name="projects"
												rows={2}
												className="block w-full rounded-md shadow-md pl-3 py-1.5 text-gray-600 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xs sm:leading-6"
												value={project}
												onChange={e =>
													setProject(
														e.target.value
													)
												}
											/>
										</div>
									</div>
								</div>

								<div className="border-gray-900/10 mt-5">
									<h2 className="text-sm font-semibold text-gray-600">
										Location
									</h2>
									<div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
										<div className="sm:col-span-2 sm:col-start-1">
											<label
												htmlFor="country"
												className="block text-xs font-normal leading-2 text-gray-500">
												Country
											</label>
											<div className="mt-1">
												<input
													type="text"
													name="country"
													id="country"
													value={country}
													onChange={e =>
														setCountry(
															e.target.value
														)
													}
													className="block w-full rounded-md shadow-md pl-3 py-1.5 text-gray-600 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xs sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label
												htmlFor="city"
												className="block text-xs font-normal leading-2 text-gray-500">
												City
											</label>
											<div className="mt-1">
												<input
													type="text"
													name="city"
													id="city"
													value={city}
													onChange={e =>
														setCity(
															e.target.value
														)
													}
													className="block w-full rounded-md shadow-md pl-3 py-1.5 text-gray-600 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xs sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label
												htmlFor="region"
												className="block text-xs font-normal leading-2 text-gray-500">
												State / Province
											</label>
											<div className="mt-1">
												<input
													type="text"
													name="region"
													id="region"
													value={state}
													onChange={e =>
														setState(
															e.target.value
														)
													}
													className="block w-full rounded-md shadow-md pl-3 py-1.5 text-gray-600 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xs sm:leading-6"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{success && (
					<div className="rounded-md bg-green-50 p-4">
						<div className="flex">
							<div className="flex-shrink-0">
								<CheckCircleIcon
									className="h-5 w-5 text-green-400"
									aria-hidden="true"
								/>
							</div>
							<div className="ml-3">
								<p className="text-sm font-medium text-green-800">
									Successfully uploaded, refresh
									to view the updated inforamtion
								</p>
							</div>
						</div>
					</div>
				)}
				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						onClick={handleOnUpdate}
						className="rounded-md bg-[#1F2937] px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800 shadow-md hover:shadow-lg">
						Save to update
					</button>
				</div>
			</div>
		</forsetSkillm>
	);
}
