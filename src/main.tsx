import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from '@/Router/Router.tsx'
import './style/global.ts'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/style/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={{ border: '1px solid black' }}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    </React.StrictMode>
)
