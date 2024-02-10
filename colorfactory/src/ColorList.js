import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>Welcome to the color factory!</h1>
      <Link to="/new">Add new color</Link>
      <h2>Colors</h2>
      <ul>
        {colors.map((color) => (
          <li key={color.name}>
            <Link to={`/detail/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
