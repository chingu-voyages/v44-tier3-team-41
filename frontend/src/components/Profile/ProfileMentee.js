import React, {useState} from 'react';
import {CheckCircleIcon} from '@heroicons/react/20/solid';
import axios from 'axios';

export default function ProfileMentee({currentUser}) {
	console.log(currentUser);
	const [name, setName] = useState(currentUser.name);
	const [about, setAbout] = useState(currentUser.about);
	const [occupation, setOccupation] = useState(currentUser.occupation);
	const [skill, setSkill] = useState(currentUser.skill);
	const [goal, setGoal] = useState(currentUser.goal);
	const [project, setProject] = useState(currentUser.project);
	const [image, setImage] = useState('');
	const [imagePreview, setImagePreview] = useState(currentUser.profileImg);
	const [country, setCountry] = useState(currentUser.country);
	const [city, setCity] = useState(currentUser.city);
	const [state, setState] = useState(currentUser.state);

	const [success, setSuccess] = useState(false);

	function handleImageChange(event) {
		const {files} = event.target;
		if (files.length !== 0) {
			setImage(prevState => files[0]);
			setImagePreview(URL.createObjectURL(files[0]));
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
				const imageUrl = await handleImageUpload();
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
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Profile
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						This information will be displayed publicly so be careful what you
						share.
					</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-6 text-gray-900">
								name
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<input
										type="text"
										name="username"
										id="username"
										className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										value={name}
										onChange={e => setName(e.target.value)}
									/>
								</div>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="about"
								className="block text-sm font-medium leading-6 text-gray-900">
								About
							</label>
							<div className="mt-2">
								<textarea
									id="about"
									name="about"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={about}
									onChange={e => setAbout(e.target.value)}
								/>
							</div>
							<p className="mt-3 text-sm leading-6 text-gray-600">
								Write a few sentences about yourself.
							</p>
						</div>
						<div className="col-span-full">
							<label
								htmlFor="occupation"
								className="block text-sm font-medium leading-6 text-gray-900">
								Occupation
							</label>
							<div className="mt-2">
								<textarea
									id="occupation"
									name="occupation"
									rows={2}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={occupation}
									onChange={e => setOccupation(e.target.value)}
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="skills"
								className="block text-sm font-medium leading-6 text-gray-900">
								Skills
							</label>
							<div className="mt-2">
								<textarea
									id="skills"
									name="skills"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={skill}
									onChange={e => setSkill(e.target.value)}
								/>
							</div>
						</div>
						<div className="col-span-full">
							<label
								htmlFor="goals"
								className="block text-sm font-medium leading-6 text-gray-900">
								Goals
							</label>
							<div className="mt-2">
								<textarea
									id="goals"
									name="goals"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={goal}
									onChange={e => setGoal(e.target.value)}
								/>
							</div>
						</div>
						<div className="col-span-full">
							<label
								htmlFor="projects"
								className="block text-sm font-medium leading-6 text-gray-900">
								Projects
							</label>
							<div className="mt-2">
								<textarea
									id="projects"
									name="projects"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={project}
									onChange={e => setProject(e.target.value)}
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="cover-photo"
								className="block text-sm font-medium leading-6 text-gray-900">
								Profile Image
							</label>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
								<label htmlFor="image">image:</label>
								<input
									className="form-control"
									type="file"
									name="image"
									onChange={handleImageChange}
									required
								/>
								{imagePreview && (
									<img
										className="mx-auto d-block"
										src={imagePreview}
										alt="preview"
										width="300"
									/>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Location
					</h2>
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="country"
								className="block text-sm font-medium leading-6 text-gray-900">
								Country
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="country"
									id="country"
									value={country}
									onChange={e => setCountry(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="city"
								className="block text-sm font-medium leading-6 text-gray-900">
								City
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="city"
									id="city"
									value={city}
									onChange={e => setCity(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="region"
								className="block text-sm font-medium leading-6 text-gray-900">
								State / Province
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="region"
									id="region"
									value={state}
									onChange={e => setState(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
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
								Successfully uploaded, refresh to view the updated inforamtion
							</p>
						</div>
					</div>
				</div>
			)}
			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					onClick={handleOnUpdate}
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Update
				</button>
			</div>
		</forsetSkillm>
	);
}
