import React, {useEffect} from 'react';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {getAllMentorsThunk} from '../store/mentor';
import {
	groupAndCountCompany,
	groupAndCountRole,
	sortArrayDesc,
} from '../util/helper';
import BarChart from '../components/Chart/BarChart';

const stats = [
	{
		name: 'Total mentors',
		value: '128',
	},
	{
		name: 'Total  mentees',
		value: '53',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Report = () => {
	const dispatch = useDispatch();
	const mentors = useSelector(
		state => state.mentor.search
	);
	// if (mentors) {
	// 	const companyGroup = sortArrayDesc(groupAndCountCompany(mentors));
	// 	const roleGroup = sortArrayDesc(groupAndCountRole(mentors));
	// 	console.log(companyGroup);
	// 	console.log(roleGroup);
	// }
	let companyGroup;
	let roleGroup;

	if (mentors) {
		companyGroup = sortArrayDesc(
			groupAndCountCompany(mentors)
		);
		roleGroup = sortArrayDesc(
			groupAndCountRole(mentors)
		);
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
			<div className="bg-[#fafafa] p-5 rounded-lg shadow-lg pt-10 border border-light4">
				<div className="flex gap-x-4 bg-dark1 shadow-dark2/30 p-3 -mt-5 shadow-lg rounded-lg py-5 items-center justify-center">
					<div>
						<h2 className="p-2 text-base text-gray-200 tracking-wide">
							User Report
						</h2>
					</div>
				</div>
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
									'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-5 sm:px-6 lg:border-t-0 xl:px-8'
								)}>
								<dt className="text-sm font-normal tracking-wide leading-6 text-gray-400">
									{stat.name}
								</dt>
								<dd className="w-full flex-none text-3xl font-bold leading-10 tracking-tight text-gray-900">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="flex flex-wrap my-10">
					<div className="w-full md:w-1/2 px-8">
						<BarChart
							title="Company Chart"
							data={companyGroup}
						/>
					</div>
					<div className="w-full md:w-1/2 px-8">
						<BarChart
							title="Role Chart"
							data={roleGroup}
						/>
					</div>
				</div>
			</div>
		);
	}
};

export default Report;
