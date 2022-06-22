import React from 'react'

//1 clase udemy
import  ReactDOM from 'react-dom'
import CounterApp from './CounterApp';
import './estilo.css'


// const saludo = <h1>hola</h1>
// const divRoot = document.querySelector('#root');
// ReactDOM.render(saludo,divRoot);

//2 Clase

const divRoot = document.querySelector('#root');
ReactDOM.render(<CounterApp  value={123} />,divRoot);


