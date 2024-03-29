import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import Index from "./pages/Index";
import Barbers from "./pages/Barbers";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import PersonalData from "./pages/PersonalData";
import AppointmentSuccess from "./pages/AppointmentSuccess";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App/>}>
                      <Route index element={<Index/>} />
                      <Route path="/barbers" element={<Barbers/>}/>
                      <Route path="/services" element={<Services/>}/>
                      <Route path="/appointment" element={<Appointment/>}/>
                      <Route path="/appointment/personal_data" element={<PersonalData/>}/>
                      <Route path="/appointment/success" element={<AppointmentSuccess/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
