import React, { useEffect } from "react";
import Banner from "../components/MenteeDetail/Banner";
import DetailCard from "../components/MenteeDetail/DetailCard";
import { useParams } from 'react-router-dom'
import { getMenteeThunk } from "../store/mentee";
import { useDispatch, useSelector } from "react-redux";

const MenteeDetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const mentee = useSelector(state => state.mentee.mentee)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getMenteeThunk(id));
    };
    fetchData();
  }, [dispatch, id]);

  if (mentee)

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

export default MenteeDetail;
