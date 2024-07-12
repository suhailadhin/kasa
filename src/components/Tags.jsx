import React from 'react';

const TagList = ({ tags }) => {
  return (
    <div className='tag'>
      {tags.map((tag, index) => (
        <span key={index} className='tag-item'>{tag}</span>
      ))}
    </div>
  );
};

export default TagList;