import React from "react";
import Banner from "../components/MentorDetail/Banner";
import DetailCard from "../components/MentorDetail/DetailCard";

const MentorDetail = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-300">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <Banner />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
          <DetailCard />
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;
