import React, { useState, useEffect } from "react";
import { getAllMentees } from "../api/fetch";
import MenteeCard from "../components/MenteeCard/MenteeCard";

function MenteeList() {
  const [mentees, setMentees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initialSetUp() {
      try {
        const data = await getAllMentees();
        console.log(data);
        setMentees(data);
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
          {mentees &&
            mentees.map((mentee, index) => (
              <MenteeCard key={index} mentee={mentee} />
            ))}
        </ul>
      )}
    </div>
  );
}

export default MenteeList;
