import {EnvelopeIcon} from '@heroicons/react/20/solid';
import {ChatBubbleLeftIcon} from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';

function MenteeCard({mentee}) {
	if (!mentee) {
		return <div>No mentee data</div>;
	}

	return (
		<li className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow-md hover:shadow-lg hover:shadow-green-900/20 border border-light4">
			<Link
				to={'/dashboard/mentee_detail'}
				state={mentee}>
				<div className="flex flex-1 flex-col p-3">
					<div className="relative">
						<img
							className="mx-auto h-52 w-full flex-shrink-0 rounded-lg object-center object-cover overflow-hidden shadow-md"
							src={mentee.profileImg}
							alt=""
						/>
						<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark2 to-dark6/5"></div>
					</div>
					<h3 className="mt-2 text-sm font-medium text-gray-900">
						{mentee.name}
					</h3>
					<dl className="mt-1 flex flex-grow flex-col justify-between">
						<dd className="text-xs text-gray-500">
							{mentee.occupation}
						</dd>
					</dl>
				</div>
			</Link>
			<div>
				<div className="flex mb-3">
					<div className="flex w-0 flex-1 bg-[#fafafa] shadow-md m-2 rounded-md hover:shadow-lg">
						<a
							href={`mailto:${mentee.email}`}
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
							state={mentee}
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

export default MenteeCard;
