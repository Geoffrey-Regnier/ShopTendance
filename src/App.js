import Boutique from './Components/Boutique';
import Formulaire from './Components/Formulaire';
import './Styles/App.css';
import React from 'react';



const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <h1>Shop Tendance</h1>
      </div>
      <div className='container'>
        <Boutique />
        <Formulaire />
      </div>
    </div>
  );
}

export default App;
