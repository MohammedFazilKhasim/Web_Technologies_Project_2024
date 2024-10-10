import React from 'react';
import Home from './components/Home';
import LiteratureReview from './components/LiteratureReview';
import Taxonomy from './components/Taxonomy';
import Team from './components/Team';
import Challenges from './components/Challenges';
import References from './components/References';
import './App.css';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('literature')}>Literature Review</button></li>
          <li><button onClick={() => scrollToSection('taxonomy')}>Taxonomy</button></li>
          <li><button onClick={() => scrollToSection('challenges')}>Challenges</button></li>
          <li><button onClick={() => scrollToSection('team')}>Team</button></li>
          <li><button onClick={() => scrollToSection('references')}>References</button></li>
        </ul>
      </nav>

      <div className="content">
        <section id="home"><Home /></section>
        <section id="literature"><LiteratureReview /></section>
        <section id="taxonomy"><Taxonomy /></section>
        <section id="challenges"><Challenges /></section>
        <section id="team"><Team /></section>
        <section id="references"><References /></section>
      </div>
    </div>
  );
}

export default App;
