import React from 'react'
import { useState, useEffect } from 'react';

const ClockFunction = () => {
    const initialState= {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Angel',
        apellidos: 'Martinez'
     };
     const [state, setState] =useState(initialState)
     const [timerID, setTimerID] =useState(initialState)

     const tick = ()=>{
        setState((prevState) => {
           let edad = prevState.edad +1;
           return {
              ...prevState,
              fecha: new Date(),
              edad
           }
        });
     }

     useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000
         );
         return () => {
            clearInterval (timerID);
         }
     }, [timerID])
  return (
    <div>
    <h2>
    Hora Actual:
    {state.fecha.toLocaleTimeString()}
    </h2>
    <h3>{state.nombre} {state.apellidos}</h3>
    <h1>Edad: {state.edad}</h1>
    </div>
  )
}

export default ClockFunction