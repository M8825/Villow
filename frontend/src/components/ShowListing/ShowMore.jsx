import React, { useState } from 'react';

const ShowMore = ({ text }) => {
  const [isExpanded, setExpanded] = useState(false);
  const maxLength = 35;

  return (
    <div className="overview-text">
      {isExpanded ? text : text.split(" ").slice(0, maxLength).join(" ") }
      {text.length > maxLength && (
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
