import {
  PencilIcon,
  CircleStackIcon,
  Square3Stack3DIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Front-End Engineer",
    description: "100 mentors",
    icon: PencilIcon,
  },
  {
    name: "Back-End Engineer",
    description: "100 mentors",
    icon: CircleStackIcon,
  },
  {
    name: "Full Stack Engineer",
    description: "100 mentors",
    icon: Square3Stack3DIcon,
  },
  {
    name: "DevOps Engineer",
    description: "100 mentors",
    icon: ArrowPathRoundedSquareIcon,
  },
];

export default function MiddleSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn and grow across expertise for free
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find mentors from product fields across the globe
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
