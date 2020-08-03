import React from 'react';
import Tile from './Tile';
import './TileContainer.css';

function TileContainer() {
  return (
    <div className="tileFlex">
      <Tile text="About" />
      <Tile text="Work" />
      <Tile text="Hobbies" />
    </div>
  );
}

export default TileContainer;