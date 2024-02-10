import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ColorDetail = ({ colors }) => {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name === color);

  useEffect(() => {
    // Update the background color of the body or html element
    document.body.style.backgroundColor = selectedColor.value;

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = ''; // Reset to default or another color
    };
  }, [selectedColor.value]);

  return (
    <div>
      <h2>This is {selectedColor.name}</h2>
      <p> Isn't it beautiful?</p>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default ColorDetail;
