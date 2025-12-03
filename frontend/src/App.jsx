import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfessionProvider } from './context/ConfessionContext';
import Landing from './pages/Landing';

import ModeChoice from './pages/ModeChoice';
import ExamChoice from './pages/ExamChoice';
import ExamSession from './pages/ExamSession';
import Loading from './pages/Loading';
import ConfessionSheet from './pages/ConfessionSheet';
import DaysInput from './pages/DaysInput'; // Assuming DaysInput is imported from somewhere

function App() {
  return (
    <ConfessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/escolher-modo" element={<ModeChoice />} />
          <Route path="/dias-confissao" element={<DaysInput />} />
          <Route path="/escolher-exame" element={<ExamChoice />} />
          <Route path="/exame/:tipo" element={<ExamSession />} />
          <Route path="/processando" element={<Loading />} />
          <Route path="/ficha" element={<ConfessionSheet />} />
        </Routes>
      </BrowserRouter>
    </ConfessionProvider>
  );
}

export default App;
