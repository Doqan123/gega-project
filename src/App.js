import React from 'react';
import './App.css';  
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Matrix from './components/Matrix';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App font-open">
        <Navbar />
        <Banner />
        <Movies />
        <Matrix />
        <Blog />
    </div>
  );
}

export default App;
