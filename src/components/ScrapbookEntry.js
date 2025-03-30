import React from 'react';

const ScrapbookEntry = ({ entry }) => {
  return (
    <div className="entry">
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
    </div>
  );
};

export default ScrapbookEntry;