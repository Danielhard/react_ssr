import React from 'react';
import ReactDom from 'react-dom';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createClientStore } from '../shared/store/index'
ReactDom.hydrate(
    <Provider store={createClientStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
