import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import { UserIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { editMentorThunk } from '../../store/mentor';
import { useNavigate } from 'react-router';

export default function ProfileMentor({ currentUser }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [about, setAbout] = useState('');
	const [email, setEmail] = useState('');
	const [countryCode, setCountryCode] =
		useState('');
	const [phone, setPhone] = useState('');
	const [role, setRole] = useState('');
	const [yrsExp, setYrsExp] = useState(0);
	const [expertise, setExpertise] = useState('');
	const [image, setImage] = useState('');
	const [imagePreview, setImagePreview] =
		useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [company, setCompany] = useState('');
	const [valid, setValid] = useState(false);
	const [validateErrors, setValidateErrors] =
		useState([]);

	const [success, setSuccess] = useState(false);

	const validate = () => {
		const errors = [];
		if (!name)
			errors.push("Please provide a 'Name'");
		if (!about)
			errors.push("Please provide a 'About'");
		if (!email)
			errors.push("Please provide a 'Email'");
		if (!phone)
			errors.push("Please provide a 'Phone'");
		if (!role)
			errors.push("Please provide a 'Role'");
		if (!yrsExp)
			errors.push("Please provide a 'YrsExp'");
		if (!company)
			errors.push("Please provide a 'Company'");
		if (!expertise)
			errors.push("Please provide a 'Expertise'");
		if (!country)
			errors.push("Please provide a 'Country'");
		if (!state)
			errors.push("Please provide a 'State'");
		if (!city)
			errors.push("Please provide a 'City'");
		if (!countryCode)
			errors.push(
				"Please provide a 'CountryCode'"
			);

		return errors;
	};

	function handleImageChange(event) {
		const { files } = event.target;
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

	if (currentUser) {
		if (!valid) {
			setName(currentUser.name);
			setAbout(currentUser.about);
			setRole(currentUser.role);
			setExpertise(currentUser.expertise);
			setEmail(currentUser.email);
			setCountryCode(currentUser.countryCode);
			setPhone(currentUser.phone);
			setYrsExp(currentUser.yrsExp);
			setCompany(currentUser.company);
			setImage(currentUser.image);
			setImagePreview(imagePreview);
			setCountry(currentUser.country);
			setCity(currentUser.city);
			setState(currentUser.state);
			setValid(true);
		}
	}

	async function handleOnUpdate(e) {
		e.preventDefault();
		let body = {};

		const errors = validate();

		if (errors.length > 0) {
			return setValidateErrors(errors);
		}

		if (image === '') {
			body = {
				id: Number(currentUser.id),
				name,
				about,
				email,
				countryCode,
				phone,
				role,
				expertise,
				yrsExp,
				company,
				country,
				city,
				state,
				profileImg: imagePreview,
			};
		} else {
			const imageUrl = await handleImageUpload();
			body = {
				id: Number(currentUser.id),
				name,
				about,
				email,
				countryCode,
				phone,
				role,
				expertise,
				yrsExp,
				company,
				country,
				city,
				state,
				profileImg: imageUrl,
			};
		}
		await dispatch(editMentorThunk(body));

		setSuccess(true);

		// refresh
		navigate(0);
	}

	return (
		<form>
			<div className="bg-light1 p-8 rounded-lg shadow-lg mt-4">
				<div className="space-y-12">
					<div className="border-b border-dark1/10 pb-12">
						{/* Profile Heading */}
						<div className="p-2 md:pl-6 bg-dark2 rounded-lg shadow-md min-w-1/2 lg:w-1/2 -mt-12 ring-1 ring-offset-4 ring-offset-light2 ring-light4">
							<h2 className="text-sm font-medium md:w-1/3 -mt-5 leading-7 bg-gradient-to-r from-dark1 to-dark3 shadow-lg shadow-light4/10 px-6 py-1 text-blue-100 rounded-full">
								<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
								Mentor Profile
							</h2>
							<p className="text-xs leading-3 text-light4 pl-5 py-3">
								This information will be displayed
								publicly so be careful what you
								share
							</p>
						</div>
						{/* Info div */}
						<h2 className="text-sm font-semibold mt-5 text-gray-600 w-full">
							Personal information
						</h2>
						<div className="flex flex-col md:flex-row justify-evenly items-start gap-10 my-10">
							{/* Left div */}
							<div className="space-y-6">
								{/* Name */}
								<div className="">
									<label
										htmlFor="name"
										className="block text-xs font-normal leading-2 text-gray-500">
										Name & Surname
									</label>
									<div className="mt-1">
										<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-dark4">
											<input
												type="text"
												name="username"
												id="username"
												className="block flex-1 bg-white rounded-md shadow-md py-2 pl-2 text-gray-600 text-xs leading-2"
												value={name}
												onChange={e =>
													setName(e.target.value)
												}
											/>
										</div>
									</div>
								</div>

								{/* Contact info */}
								<div className="">
									<div className="mt-2 flex justify-between">
										<div className="">
											<label
												htmlFor="country"
												className="block text-xs font-normal leading-2 text-gray-500">
												Country code
											</label>
											<div className="mt-1">
												<input
													type="number"
													name="countryCode"
													id="countryCode"
													value={countryCode}
													onChange={e =>
														setCountryCode(
															e.target.value
														)
													}
													className="block flex-1 bg-white rounded-md shadow-md py-2 pl-2 text-gray-600 text-xs leading-2"
												/>
											</div>
										</div>

										<div className="">
											<label
												htmlFor="phone"
												className="block text-xs font-normal leading-2 text-gray-500">
												Phone number
											</label>
											<div className="mt-1">
												<input
													type="number"
													name="phone"
													id="phone"
													value={phone}
													onChange={e =>
														setPhone(
															e.target.value
														)
													}
													className="block flex-1 bg-white rounded-md shadow-md py-2 pl-2 text-gray-600 text-xs leading-2"
												/>
											</div>
										</div>
									</div>
								</div>

								{/* About */}
								<div className="">
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
											className="block w-full rounded-md shadow-md pl-3 py-1.5 text-dark4 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark4 text-xs leading-4"
											value={about}
											onChange={e =>
												setAbout(e.target.value)
											}
										/>
									</div>
									<p className="mt-1 pl-3 text-xs leading-6 text-gray-400">
										Write a few sentences about
										yourself.
									</p>
								</div>
								{/* Profile image */}
								<div className="">
									<label
										htmlFor="cover-photo"
										className="block text-xs font-semibold text-gray-600">
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
							<div className="space-y-6">
								{/* Work div */}
								<div className="">
									<div className="flex flex-row justify-between gap-2">
										<div>
											<label
												htmlFor="company"
												className="block text-xs font-normal leading-2 text-gray-500">
												Company
											</label>
											<div className="mt-1">
												<input
													type="text"
													name="company"
													id="company"
													value={company}
													onChange={e =>
														setCompany(
															e.target.value
														)
													}
													className="block w-full rounded-md shadow-md pl-3 py-1.5 text-dark4 ring-inset ring-light2 placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-dark4 text-xs leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label
												htmlFor="role"
												className="block text-xs font-normal leading-2 text-gray-500">
												Role
											</label>
											<div className="mt-1">
												<input
													type="text"
													name="role"
													value={role}
													onChange={e =>
														setRole(
															e.target.value
														)
													}
													id="role"
													className="block w-full rounded-md shadow-md pl-3 py-1.5 text-dark4 ring-inset ring-light2 placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-dark4 text-xs leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label
												htmlFor="yearsOfExp"
												className="block text-xs font-normal leading-2 text-gray-500 whitespace-nowrap">
												Years Exp.
											</label>
											<div className="mt-1">
												<input
													type="number"
													name="yearsOfExp"
													id="yearsOfExp"
													value={yrsExp}
													onChange={e =>
														setYrsExp(
															e.target.value
														)
													}
													className="block w-10 md:w-full rounded-md shadow-md pl-3 py-1.5 text-dark4 ring-inset ring-light2 placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-dark4 text-xs leading-6"
												/>
											</div>
										</div>
									</div>

									<div className="col-span-full mt-5">
										<label
											htmlFor="expertise"
											className="block text-xs font-normal leading-2 text-gray-500">
											Expertise
										</label>
										<div className="mt-2">
											<textarea
												id="expertise"
												name="expertise"
												rows={3}
												className="block w-full rounded-md shadow-md pl-3 py-1.5 text-dark4 ring-inset ring-light2 placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-dark4 text-xs leading-6"
												value={expertise}
												onChange={e =>
													setExpertise(
														e.target.value
													)
												}
											/>
										</div>
									</div>
								</div>

								{/* Location */}
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
													className="block w-full rounded-md shadow-md pl-3 py-1.5 text-dark4 ring-inset ring-light2 placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-dark4 text-xs leading-6"
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
													className="block w-full rounded-md shadow-md pl-3 py-1.5 text-dark4 ring-inset ring-light2 placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-dark4 text-xs leading-6"
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
													className="block w-full rounded-md shadow-md pl-3 py-1.5 text-dark4 ring-inset ring-light2 placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-dark4 text-xs leading-6"
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
				{validateErrors.length > 0 && (
					<div className="flex flex-col my-2 ml-2">
						<div className="text-red-600 text-[13px] font-semibold  ">
							{validateErrors.map((error, i) => (
								<div key={i}>{error}</div>
							))}
						</div>
					</div>
				)}
				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						onClick={handleOnUpdate}
						className="rounded-md bg-dark1 px-5 py-2 text-xs font-semibold text-white hover:bg-dark3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark3 shadow-md hover:shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4">
						Save to update
					</button>
				</div>
			</div>
		</form>
	);
}
