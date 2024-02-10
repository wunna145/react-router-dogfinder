import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ColorForm = ({ onAddColor }) => {
  const [newColor, setNewColor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColorName = e.target.colorName.value;
    onAddColor({ name: newColorName, value: newColor });
    setNewColor('');
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Color</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="colorName">
        Color name:
        <input type="text" name="colorName" placeholder='Enter a name of color'/>
      </label>
        <label>
          Color:
          <input type="color" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default ColorForm;
