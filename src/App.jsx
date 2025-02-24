import React from 'react';
import Title from './components/Title';
import MenuItems from './components/MenuItems';
import MenuDatos from './components/MenuDatos'
import CityMap from './components/CityMap';
import './App.css';

const App = () => {
  
  return (

    <div>
      <div className='Principal'>
        <Title />
      </div>

      <div className='SubPrincipal'>
        <MenuItems />
        <CityMap />
        <MenuDatos />
      </div>
    </div>

  );
};

export default App;

