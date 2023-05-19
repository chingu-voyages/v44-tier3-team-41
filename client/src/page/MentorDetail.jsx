import Banner from "../components/MentorDetail/Banner";
import DetailCard from "../components/MentorDetail/DetailCard";
import { useParams } from "react-router-dom";
import { getMentorById } from "../api/fetch";
import React, { useState, useEffect } from "react";

const MentorDetail = () => {
  let { id } = useParams();

  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initialSetUp() {
      try {
        const data = await getMentorById(id);
        console.log(data);
        setMentor(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    initialSetUp();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="bg-gray-300">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <Banner mentor={mentor} />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
          <DetailCard mentor={mentor} />
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;
