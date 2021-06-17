import React from 'react'
import ReactDOM from 'react-dom'
import App from './App' 
import { ProviderFunction } from './context'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <ProviderFunction>
            <App />
        </ProviderFunction>       
    </React.StrictMode>,
    document.getElementById('root')
)