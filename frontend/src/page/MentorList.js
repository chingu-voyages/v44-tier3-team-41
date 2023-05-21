import React, { useEffect, useState } from "react";

import MentorCard from "../components/MentorCard/MentorCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllMentorsThunk } from "../store/mentor";

export default function MentorList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllMentorsThunk());

    };
    fetchData();
  }, [dispatch]);

  // const mentors = Object.values(useSelector(state => state.mentor.search))

  // if (Object.keys(mentors).length === 0) {
  //   return <div>Loading...</div>;

  // }
  const mentors = []
  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mentors &&
          mentors.map((mentor, index) => (

            <MentorCard key={index} mentor={mentor} />

          ))}
      </ul>
    </div>
  );
}
