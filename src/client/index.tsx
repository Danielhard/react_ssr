import React from 'react';
import ReactDom from 'react-dom';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDom.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
