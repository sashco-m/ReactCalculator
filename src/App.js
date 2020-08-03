import React from 'react';
import Calculator from './components/Calculator';
import Hints from './components/Hints';

function App() {
  document.body.style.backgroundColor="#f9f9f9";
  return (
    <div>
      <Calculator />
      <Hints />
    </div>
  );
}

export default App;
