import React from "react";
import Banner from "../components/MentorDetail/Banner";
import DetailCard from "../components/MentorDetail/DetailCard";
import { Link } from "react-router-dom";

const MentorDetail = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-300">
        {" "}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to={"/home"}>
            <img
              className="mx-auto h-12 w-auto"
              src="../../../public/dm_logo_clear.png"
              alt="Your Company"
            />
          </Link>
        </div>
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
