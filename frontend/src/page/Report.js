import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMentorsThunk } from '../store/mentor';
import {
	groupAndCountCompany,
	groupAndCountRole,
	sortArrayDesc,
} from '../util/helper';
import BarChart from '../components/Chart/BarChart';

const stats = [
	{
		name: 'total mentors',
		value: '100',
	},
	{
		name: 'total  mentees',
		value: '50',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Report = () => {
	const dispatch = useDispatch();
	const mentors = useSelector(state => state.mentor.search);
	// if (mentors) {
	// 	const companyGroup = sortArrayDesc(groupAndCountCompany(mentors));
	// 	const roleGroup = sortArrayDesc(groupAndCountRole(mentors));
	// 	console.log(companyGroup);
	// 	console.log(roleGroup);
	// }
	let companyGroup
	let roleGroup

	if (mentors) {
		companyGroup = sortArrayDesc(groupAndCountCompany(mentors));
		roleGroup = sortArrayDesc(groupAndCountRole(mentors));
		// 	console.log(companyGroup);
		// 	console.log(roleGroup);
	}
	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getAllMentorsThunk());
		};
		fetchData();
	}, [dispatch]);

	if (mentors) {
		return (
			<div>
				<div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
					<dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:px-2 xl:px-0">
						{stats.map((stat, statIdx) => (
							<div
								key={stat.name}
								className={classNames(
									statIdx % 2 === 1
										? 'sm:border-l'
										: statIdx === 2
											? 'lg:border-l'
											: '',
									'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8'
								)}>
								<dt className="text-sm font-medium leading-6 text-gray-500">
									{stat.name}
								</dt>
								<dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="flex flex-wrap mt-20">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<BarChart title="company chart" data={companyGroup} />

					</div>
					<div className="w-full md:w-1/2 px-3">
						<BarChart title="role chart" data={roleGroup} />
					</div>
				</div>
			</div>
		);
	}
};

export default Report;
