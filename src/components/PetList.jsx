import React from 'react';
import Pet from './Pet';

const PetList = ({ pets }) => {
  return (
    <>
      {pets.map((pet, index) => (
        <Pet key={index} {...pet} />
      ))}
    </>
  );
};

export default PetList;
