import React from 'react';
import './subprincipal.css';

const MenuDatos = () => (
    <div className = 'seccion right'>
      <h2>Datos</h2>
      <div className='list'>
        <p>Inicio:<span id='start-position'>0, 0</span></p>  
        <p>Fin:<span id='end-position'>10, 10</span></p>
        <p>Carreteras:<span id='road-count'>5</span></p>
        <p>Semaforos:<span id='traffic-lights'>3</span></p> 
      </div>
    </div>
);

export default MenuDatos;