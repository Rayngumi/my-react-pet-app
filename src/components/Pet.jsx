import React from 'react';

const Pet = ({ name, type, age }) => {
  return (
    <>
      <h2>{name}</h2>
      <h4>Type: {type}</h4>
      <h4>Age: {age}</h4>
    </>
  );
};

export default Pet;
