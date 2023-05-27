import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenteeCard from "../components/MenteeCard/MenteeCard";
import { getAllMenteesThunk } from "../store/mentee";

export default function MenteeList() {
  const dispatch = useDispatch()
  const mentees = useSelector(state => state.mentee.search)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllMenteesThunk())
    };
    fetchData()
  }, [dispatch]);

  if (mentees)

    return (
      <div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mentees?.map((mentee, index) => (
            <MenteeCard key={index} mentee={mentee} />
          ))}
        </ul>
      </div>
    );
}
