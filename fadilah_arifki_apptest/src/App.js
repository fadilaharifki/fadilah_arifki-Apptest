import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './page/home';
import Contacts from './page/contacts';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}