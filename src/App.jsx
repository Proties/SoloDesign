import { Routes, Route } from 'react-router-dom';

import PublicLayout from "./Layouts/PublicLayout"
import ProjectLayout from "./Layouts/ProjectLayout"

import './App.css';
import Home from "./Pages/Home"
import Contact from './Pages/Contact';
import ProjectOne from "./Pages/ProjectOne"
import ProjectTwo from "./Pages/ProjectTwo"

function App() {

  return (
    <Routes>

      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='/project' element={<ProjectLayout />}>
        <Route path='axis' element={<ProjectOne />} />
        <Route path='neurohome' element={<ProjectTwo />} />

      </Route>


    </Routes>

  )
}

export default App;
