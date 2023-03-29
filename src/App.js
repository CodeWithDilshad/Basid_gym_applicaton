import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';


import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import ExersizeDetails from './pages/ExersizeDetails'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Box width="400px" sx={{width:{xl:"1488"}}} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="exercise/:id" element={<ExersizeDetails />} />
        </Routes>
        <Footer/>
      </Box>
    </div>
  )
}

export default App
