import React from "react";

// A small utility function to convert gender from number to text representation
const genderText = (genderCode) => {
  switch (genderCode) {
    case 1:
      return "Female";
    case 2:
      return "Male";
    default:
      return "Other";
  }
};

const PersonInfo = ({ actor }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      {actor.profile_path && (
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
          alt={`${actor.name}`}
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{actor.name}</div>
        <p className="text-gray-700 text-base">
          Gender: {genderText(actor.gender)}
        </p>
        {("actor", actor)}
        <p className="text-gray-700 text-base">
          Known for: {actor.known_for_department}
        </p>
        <p className="text-gray-700 text-base">
          Popularity: {actor.popularity}
        </p>
      </div>
    </div>
  );
};

export default PersonInfo;
