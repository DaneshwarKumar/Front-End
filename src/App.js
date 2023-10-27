import React from 'react';
import AddUser from './Components/AddUser';
import Navbar from './Components/Navbar';
import CloudBlitz from './Components/CloudBlitz';
import AllUser from './Components/AllUsers';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import EditUser from './Components/EditUser';


const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes> 
            <Route path='/'  element={<CloudBlitz />}/>
            <Route path='/add'  element={<AddUser />} />
            <Route path='/all' element= {<AllUser /> } />
            <Route path='/edit/:id' element={<EditUser />} />
     </Routes>
    </BrowserRouter>
  )
}


export default App;
