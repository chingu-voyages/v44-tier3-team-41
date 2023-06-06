import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllMentorsThunk } from '../../store/mentor';

function Scroll() {
	const dispatch = useDispatch()
	const [mentors, setMentors] = useState('')
	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getAllMentorsThunk()).then(res => setMentors(res.Mentors))
		}
		fetchData()
	}, [dispatch])

	if (mentors)
		return (
			<div className="py-10 overflow-hidden bg-light1">
				<div>
					<p className="my-2 text-base font-bold text-center tracking-wide">
						List of our current mentors
					</p>
				</div>
				<div class="inline-flex space-x-4 whitespace-nowrap">
					{/* Images */}

					<div div className="inline-flex space-x-4 py-4 mx-auto gap-20 animate-scroll">
						{mentors?.map(mentor => (<div className="rounded-full flex-none">
							<img
								className="object-cover object-center h-20 bg-gray-500 rounded-full aspect-square"
								src={mentor.profileImg}
								alt="mentors"
							/>
						</div>))}

					</div>
				</div>
			</div >
		);
}

export default Scroll;
