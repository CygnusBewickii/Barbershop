import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import Index from "./pages/Index";
import Barbers from "./pages/Barbers";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}>
                  <Route index element={<Index/>} />
                  <Route path="/barbers" element={<Barbers/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
