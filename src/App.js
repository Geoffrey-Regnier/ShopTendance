import Boutique from './Components/Boutique';
import Formulaire from './Components/Formulaire';
import './Styles/App.css';
import React from 'react';



const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <h1>Shop Teandence</h1>
      </div>
        <Boutique />
        <Formulaire />
    </div>
  );
}

export default App;
