import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';

const App = () => {
  const [colors, setColors] = useState([
    { name: 'Red', value: '#ff0000' },
    { name: 'Green', value: '#00ff00' },
    { name: 'Blue', value: '#0000ff' }
  ]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<ColorList colors={colors} />} />
          <Route path="/detail/:color" element={<ColorDetail colors={colors} />} />
          <Route path="/new" element={<ColorForm onAddColor={addColor} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
