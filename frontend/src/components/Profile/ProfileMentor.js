import React, {useState} from 'react';
import {CheckCircleIcon} from '@heroicons/react/20/solid';
import axios from 'axios';
import {UserIcon} from '@heroicons/react/24/outline';
import {useDispatch} from 'react-redux';
import {editMentorThunk} from '../../store/mentor';

export default function ProfileMentor({currentUser}) {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [about, setAbout] = useState('');
	const [email, setEmail] = useState('');
	const [countryCode, setCountryCode] = useState('');
	const [phone, setPhone] = useState('');
	const [role, setRole] = useState('');
	const [yrsExp, setYrsExp] = useState(0);
	const [expertise, setExpertise] = useState('');
	const [image, setImage] = useState('');
	const [imagePreview, setImagePreview] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [company, setCompany] = useState('');
	const [valid, setValid] = useState(false);
	const [validateErrors, setValidateErrors] = useState([]);

	const [success, setSuccess] = useState(false);

	const validate = () => {
		const errors = [];
		if (!name) errors.push("Please provide a 'Name'");
		if (!about) errors.push("Please provide a 'About'");
		if (!email) errors.push("Please provide a 'Email'");
		if (!phone) errors.push("Please provide a 'Phone'");
		if (!role) errors.push("Please provide a 'Role'");
		if (!yrsExp) errors.push("Please provide a 'YrsExp'");
		if (!company) errors.push("Please provide a 'Company'");
		if (!expertise) errors.push("Please provide a 'Expertise'");
		if (!country) errors.push("Please provide a 'Country'");
		if (!state) errors.push("Please provide a 'State'");
		if (!city) errors.push("Please provide a 'City'");
		if (!countryCode) errors.push("Please provide a 'CountryCode'");

		return errors;
	};

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

		setName('');
		setAbout('');
		setRole('');
		setExpertise('');
		setEmail('');
		setCountryCode('');
		setPhone('');
		setYrsExp('');
		setCompany('');
		setImage('');
		setImagePreview('');
		setCountry('');
		setCity('');
		setState('');
	}

	return (
		<form>
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					{/* Profile Heading */}
					<div className="p-2 pl-6 bg-white rounded-lg shadow-md w-1/2">
						<h2 className="text-sm font-medium w-1/3 leading-7 bg-indigo-800 px-4 py-1 text-blue-300 rounded-full shadow-lg">
							<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
							Mentor Profile
						</h2>
						<p className="text-xs leading-6 text-gray-400 pl-5">
							This information will be displayed publicly so be careful what you
							share
						</p>
					</div>

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
						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="company"
								className="block text-sm font-medium leading-6 text-gray-900">
								Company
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="company"
									id="company"
									value={company}
									onChange={e => setCompany(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="role"
								className="block text-sm font-medium leading-6 text-gray-900">
								Role
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="role"
									value={role}
									onChange={e => setRole(e.target.value)}
									id="role"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="yearsOfExp"
								className="block text-sm font-medium leading-6 text-gray-900">
								Years of Experience
							</label>
							<div className="mt-2">
								<input
									type="number"
									name="yearsOfExp"
									id="yearsOfExp"
									value={yrsExp}
									onChange={e => setYrsExp(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="col-span-full">
							<label
								htmlFor="expertise"
								className="block text-sm font-medium leading-6 text-gray-900">
								Expertise
							</label>
							<div className="mt-2">
								<textarea
									id="expertise"
									name="expertise"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={expertise}
									onChange={e => setExpertise(e.target.value)}
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
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Contact inforamtion
					</h2>
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="country"
								className="block text-sm font-medium leading-6 text-gray-900">
								Country Code
							</label>
							<div className="mt-2">
								<input
									type="number"
									name="countryCode"
									id="countryCode"
									value={countryCode}
									onChange={e => setCountryCode(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="phone"
								className="block text-sm font-medium leading-6 text-gray-900">
								Phone number
							</label>
							<div className="mt-2">
								<input
									type="number"
									name="phone"
									id="phone"
									value={phone}
									onChange={e => setPhone(e.target.value)}
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
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Save to update
				</button>
			</div>
		</form>
	);
}
