import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map(r => (
        <Card key={r.id} name={r.name} username={r.username} email={r.email} />
      ))}
    </>
  );
};

export default CardList;
