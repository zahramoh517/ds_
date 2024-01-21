// App.js
import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Title from './components/Title';
import CTA from './components/CTA';
import InfoLinks from './components/InfoLinks';

function App() {
  return (
    <div className="App">
      <aside className="Sidebar">
        <Logo />
        <InfoLinks />
      </aside>
      <div className="MainContent">
        <header>
          <Navigation />
        </header>
        <main>
          <Title />
          <CTA />
        </main>
      </div>
    </div>
  );
}

export default App;
