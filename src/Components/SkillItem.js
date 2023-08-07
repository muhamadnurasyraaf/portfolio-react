import React from 'react';

const SkillItem = ({ name, level }) => {
  const getColorForLevel = () => {
    if (level === 'Beginner') {
      return 'lightgreen';
    } else if (level === 'Intermediate') {
      return 'yellow';
    } else if (level === 'Advanced') {
      return '#ff004f';
    } else {
      // Default color in case the level is not recognized
      return 'black';
    }
  };

  return (
    <div className='flex flex-col'>
    <div>
        <span>{name}</span>
    </div>
      
      <span style={{ color: getColorForLevel() }}> ({level})</span>
    </div>
  )
}

export default SkillItem;
