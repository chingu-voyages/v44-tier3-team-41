import {
	PencilIcon,
	CircleStackIcon,
	Square3Stack3DIcon,
	Bars3Icon,
	GlobeEuropeAfricaIcon,
	ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';

const features = [
	{
		name: 'Design',
		description: '1403 mentors',
		icon: PencilIcon,
	},
	{
		name: 'Product',
		description: '1021 mentors',
		icon: CircleStackIcon,
	},
	{
		name: 'Data Science',
		description: '2034 mentors',
		icon: Square3Stack3DIcon,
	},
	{
		name: 'DevOps Engineer',
		description: '1206 mentors',
		icon: ArrowPathRoundedSquareIcon,
	},
	{
		name: 'Marketing',
		description: '2733 mentors',
		icon: Bars3Icon,
	},
	{
		name: 'Engineering',
		description: '1226 mentors',
		icon: GlobeEuropeAfricaIcon,
	},
];

export default function MiddleSection() {
	return (
		<div className="bg-[#F0F6F9] py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<p className="text-3xl font-extrabold tracking-wide text-gray-900">
						Learn and grow across expertise for
						free
					</p>
					<p className="mt-2 text-base leading-6 text-gray-600">
						Find mentors from product fields
						across the globe
					</p>
				</div>
				<div className="mx-auto items-center justify-center mt-10 max-w-2xl sm:mt-10 lg:mt-16 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-y-8">
						{features.map(feature => (
							<div
								key={feature.name}
								className="relative pl-24 bg-white p-5 rounded-2xl shadow-xl bg-opacity-50 ">
								<dt className="font-bold text-lg leading-7 text-gray-900">
									<div className="absolute left-8 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
										<feature.icon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="text-sm text-gray-500">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="flex justify-center my-12">
					<Link>
						<button
							type="button"
							className="rounded-md bg-black px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600">
							Explore all courses
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
