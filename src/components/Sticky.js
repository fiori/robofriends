import React from 'react';

const Sticky = props => {
  return (
    <div
      style={{
        position: 'sticky',
        top: '0px',
        zIndex: '5',
        padding: '10px',
        background: 'linear-gradient(to left, rgb(7, 27, 82) 0%, rgb(0, 128, 128) 100%)',
        border: '1px solid black',
      }}
    >
      {props.children}
    </div>
  );
};

export default Sticky;
