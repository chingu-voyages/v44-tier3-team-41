import React from "react";

import MentorCard from "../components/MentorCard/MentorCard";

export default function MentorList() {
  const mentors = [];

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
