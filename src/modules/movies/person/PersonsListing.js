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

const PersonInfo = ({
  profile_path,
  name,
  gender,
  known_for_department,
  popularity,
}) => {
  debugger;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      {profile_path && (
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt={`${name}`}
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Gender: {genderText(gender)}</p>
        <p className="text-gray-700 text-base">
          Known for: {known_for_department}
        </p>
        <p className="text-gray-700 text-base">Popularity: {popularity}</p>
      </div>
    </div>
  );
};

export default PersonInfo;
