
import './App.css';
import * as React from 'react';
import Redesign from './Redesign';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Iterative from './Iterative';
import Persona from './Persona';
import ReactDevelopment from './ReactDevelopment'

function App() {
  return (
    <>
    <Routes>
    {/* Reference: https://stackoverflow.com/questions/69828516/you-cannot-render-a-router-inside-another-router-you-should-never-have-more */}
    {/* Reference: https://www.youtube.com/watch?v=xMNhDf5-hvk */}
    <Route exact path="/" element={<Home />} />
    <Route exact path="/redesign" element={<Redesign />} />
    <Route exact path="/iterative" element={<Iterative />} />
    <Route exact path="/persona" element={<Persona />} />
    <Route exact path="/milkteashop" element={<ReactDevelopment />} />
    </Routes>
    </>);
    
}

 export default App;

