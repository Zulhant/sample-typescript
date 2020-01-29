import React from 'react';
import Home from "./pages/home"
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home TitlePage="Halaman Home" />
    </div>
  );
}

export default App;
