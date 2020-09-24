import React from 'react';

const charComponent = ({letter, click}) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  return <span style={style} onClick={click}>{letter}</span>;
};

export default charComponent;