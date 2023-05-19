function Banner({ mentor }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={mentor.profileImg}
                alt="profile picture"
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600" />
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {mentor.name}
              </p>
              <p className="text-sm font-medium text-gray-600">{mentor.role}</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
