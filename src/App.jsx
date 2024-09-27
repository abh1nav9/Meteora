import React from 'react';
import Earth from './3d/Earth';
import SearchBar from './Component/SearchBar';
import Card from './Component/Card';

function App() {
  return (
    <div className="relative w-full h-screen">
      <Earth className="absolute inset-0 z-0" />
      <div className="absolute top-4 left-4 pt-64 z-10">
        <SearchBar />
      </div>
      <div className="absolute top-4 right-4 z-10">
        <Card />
      </div>
    </div>
  );
}

export default App;
