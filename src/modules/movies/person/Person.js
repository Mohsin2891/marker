import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import PersonInfo from "./PersonsListing";
const Person = () => {
  const { persons } = useSelector((state) => state?.movies, shallowEqual);

  return (
    <div>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  p-5">
        {persons?.length > 0
          ? persons?.map((person) => (
              <PersonInfo
                profile_path={person?.profile_path}
                name={person?.name}
                gender={person?.gender}
                known_for_department={person?.known_for_department}
                popularity={person?.popularity}
              />
            ))
          : "No Actor found!"}
      </div>
    </div>
  );
};

export default Person;
