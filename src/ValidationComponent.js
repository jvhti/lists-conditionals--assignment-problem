import React from 'react';

const validationComponent = ({length}) => {
  return length > 5 ? "Text long enough" : "Text too short";
};

export default validationComponent;