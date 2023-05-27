import {UserIcon} from '@heroicons/react/24/outline';

export default function ProfileMentor() {
	return (
		<form className="bg-[#fafafa] p-8 rounded-lg shadow-lg">
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					{/* Profile Heading */}
					<div className="p-2 pl-6 bg-white rounded-lg shadow-md w-1/2">
						<h2 className="text-sm font-medium w-1/3 leading-7 bg-indigo-800 px-4 py-1 text-blue-300 rounded-full shadow-lg">
							<UserIcon className="w-4 h-4 inline-block align-text-bottom mr-1" />
							Mentor Profile
						</h2>
						<p className="text-xs leading-6 text-gray-400 pl-5">
							This information will be displayed
							publicly so be careful what you
							share
						</p>
					</div>
					{/* Info div */}
					<div className="flex flex-row space-x-10 mt-10">
						{/* Left div */}
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-1/2">
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
											className="block flex-1 bg-white rounded-md shadow-md py-2 pl-2 text-gray-400 placeholder:text-gray-600 text-sm leading-2"
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
									About
								</label>
								<div className="mt-1">
									<textarea
										id="about"
										name="about"
										rows={3}
										className="block w-full text-sm rounded-md shadow-md py-2 pl-2 text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600"
										placeholder="More about you"
										value="More about you"
									/>
								</div>
								<p className="mt-3 text-sm leading-6 text-gray-600">
									Write a few sentences about
									yourself.
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
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
						{/* Right div */}

						<div className="border-b border-gray-900/10 pb-12 w-1/2">
							{/* Profile image */}
							<div className="col-span-full">
								<label
									htmlFor="cover-photo"
									className="block text-sm font-medium leading-6 text-gray-900">
									Profile Image
								</label>
								<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
									<label htmlFor="image">
										image:
									</label>
									<input
										className="form-control"
										type="file"
										name="image"
										required
									/>
									<img
										className="mx-auto d-block"
										alt="preview"
										width="300"
									/>
								</div>
							</div>
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
										<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
											<option>
												United States
											</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
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
											autoComplete="address-level2"
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
											autoComplete="address-level1"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Update
				</button>
			</div>
		</form>
	);
}
