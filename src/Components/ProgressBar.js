import React from 'react';

const ProgressBar = ({ value }) => {
  let progressColor = 'bg-green-400';
  if (value > 40 && value <= 60) {
    progressColor = 'bg-yellow-400';
  } else if (value > 60) {
    progressColor = 'bg-red-400';
  }

  const filledWidth = `${value}%`;
  return (
    <div className="w-1/2 h-4 bg-gray-200 rounded-md overflow-hidden">
      <div
        className={`h-full ${progressColor}`}
        style={{ width: filledWidth }}
      />
    </div>
  );
};

export default ProgressBar;
