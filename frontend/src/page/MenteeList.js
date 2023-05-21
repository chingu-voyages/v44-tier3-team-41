import React from "react";

import MenteeCard from "../components/MenteeCard/MenteeCard";

function MenteeList() {
  const mentees = [];

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mentees &&
          mentees.map((mentee, index) => (
            <MenteeCard key={index} mentee={mentee} />
          ))}
      </ul>
    </div>
  );
}

export default MenteeList;
