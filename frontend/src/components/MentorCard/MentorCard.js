import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function MentorCard({ mentor }) {
	if (!mentor) {
		return <div>No mentor data</div>;
	}


	return (
		<li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
			<Link to={`/dashboard/mentor_detail/${mentor.id}`}>
				<div className="flex flex-1 flex-col p-8">
					<img
						className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
						src={mentor.profileImg}
						alt=""
					/>
					<h3 className="mt-6 text-sm font-medium text-gray-900">
						{mentor.name}
					</h3>
					<dl className="mt-1 flex flex-grow flex-col justify-between">
						<dd className="text-sm text-gray-500">{mentor.role}</dd>
						<dd className="mt-3">
							<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
								{mentor.company}
							</span>
						</dd>
					</dl>
				</div>
			</Link>
			<div>
				<div className="-mt-px flex divide-x divide-gray-200">
					<div className="flex w-0 flex-1">
						<a
							href={`mailto:${mentor.email}`}
							className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
							<EnvelopeIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
							Email
						</a>
					</div>
					<div className="-ml-px flex w-0 flex-1">
						<a
							href={`tel:${mentor.telephone}`}
							className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
							<ChatBubbleLeftIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
							Chat
						</a>
					</div>
				</div>
			</div>
		</li>
	);
}

export default MentorCard;
