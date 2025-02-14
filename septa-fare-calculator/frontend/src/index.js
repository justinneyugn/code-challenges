import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDom.render(<App />, root);
})