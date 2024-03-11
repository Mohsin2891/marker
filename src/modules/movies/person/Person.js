import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import PersonInfo from "./PersonsListing";
const Person = () => {
  const { persons } = useSelector((state) => state?.movies, shallowEqual);

  return (
    <div>
      {persons?.map((person) => {
        <PersonInfo actor={person} />;
      })}
    </div>
  );
};

export default Person;
