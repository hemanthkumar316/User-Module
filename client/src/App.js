import React from 'react'
import Signupform from './Signupform'
import Loginform from './Loginform'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Datastore from './Datastore'
import Updatesignup from './Updatesignup'
const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/signup' element={ <Signupform/> }/>
      <Route path='/login' element={<Loginform/>}/>
         <Route path='/store' element={<Datastore/>}/>
         <Route path='/update/:id' element={<Updatesignup/>}/>
      </Routes>
    </Router>
   
   
    </div>
  )
}

export default App