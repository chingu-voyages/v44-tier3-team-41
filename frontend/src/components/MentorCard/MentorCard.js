import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function MentorCard({ mentor }) {
	if (!mentor) {
		return <div>No mentor data</div>;
	}

	return (
		<li className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow-md hover:shadow-lg hover:shadow-indigo-900/20 border border-light4">
			<Link
				to={'/dashboard/mentor_detail'}
				state={mentor}>
				<div className="flex flex-1 flex-col p-3">
					<div className="relative">
						<img
							className="mx-auto h-52 w-full flex-shrink-0 rounded-lg object-center object-cover overflow-hidden shadow-md"
							src={mentor.profileImg}
							alt=""
						/>{' '}
						<div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dark1 to-dark6/5 mix-blend-multiply rounded-lg"></div>
					</div>
					<h3 className="mt-2 text-sm font-medium text-gray-900">
						{mentor.name}
					</h3>
					<dl className="mt-1 flex flex-grow flex-col justify-between">
						<dd className="text-xs text-gray-500">
							{mentor.role}
						</dd>
						<dd className="mt-2">
							<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
								{mentor.company}
							</span>
						</dd>
					</dl>
				</div>
			</Link>
			<div>
				<div className="flex mb-2">
					<div className="flex w-0 flex-1 bg-[#fafafa] shadow-md m-2 rounded-md hover:shadow-lg">
						<a
							href={`mailto:${mentor.email}`}
							className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-2 rounded-bl-lg border border-transparent py-3 text-xs font-normal text-gray-900 hover:font-semibold">
							<EnvelopeIcon
								className="h-5 w-5 text-gray-600"
								aria-hidden="true"
							/>
							Email
						</a>
					</div>
					<div className="flex w-0 flex-1 bg-[#fafafa] shadow-md m-2 rounded-md hover:shadow-lg">
						<Link
							to={'/dashboard/directMessage'}
							state={mentor}
							className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-2 rounded-br-lg border border-transparent py-3 text-xs font-normal text-gray-900 hover:font-semibold">
							<ChatBubbleLeftIcon
								className="h-5 w-5 text-gray-700"
								aria-hidden="true"
							/>
							Chat
						</Link>
					</div>
				</div>
			</div>
		</li>
	);
}

export default MentorCard;
