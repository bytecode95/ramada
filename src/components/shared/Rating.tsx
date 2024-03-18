import { useState } from 'react';

interface RatingProps {
  maxRating: number;
  rating: number; 
  readOnly?: boolean;
  size?: string; 
}

function Rating({ maxRating, rating, readOnly, size }: RatingProps) {
  const [currentRating, setCurrentRating] = useState(rating);

  const handleClick = (value: number) => {
    if (!readOnly) {
      setCurrentRating(value);
    }
  };

  return (
    <div style={{ fontSize: size || '1rem' }}>
      {[...Array(maxRating).keys()].map((index) => (
        <span
          key={index}
          className={`cursor-pointer ${index < currentRating ? 'text-pink-500' : 'text-gray-400'}`}
          onClick={() => handleClick(index + 1)}
          style={{ fontSize: size || '1rem' }} 
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default Rating;
