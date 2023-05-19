import React, { useState, useEffect } from "react";
import { getAllMentors } from "../api/fetch";
import MentorCard from "../components/MentorCard/MentorCard";

export default function MentorList() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initialSetUp() {
      try {
        const data = await getAllMentors();
        console.log(data);
        setMentors(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    initialSetUp();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {mentors &&
            mentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} />
            ))}
        </ul>
      )}
    </div>
  );
}
