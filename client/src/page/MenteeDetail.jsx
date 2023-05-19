import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMenteeById } from "../api/fetch";
import Banner from "../components/MenteeDetail/Banner";
import DetailCard from "../components/MenteeDetail/DetailCard";

const MentorDetail = () => {
  let { id } = useParams();

  const [mentee, setMentee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initialSetUp() {
      try {
        const data = await getMenteeById(id);
        console.log(data);
        setMentee(data);
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
          <Banner mentee={mentee} />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
          <DetailCard mentee={mentee} />
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;
