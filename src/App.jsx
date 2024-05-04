import React from 'react'
import Bankdetails from './pages/Bankdetails'
import Mobile from './pages/Mobile'
import OTP from './pages/OTP'
import Name from './pages/Name'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Phonesidebar'

const App = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <Routes>
        <Route path='/' element={<Bankdetails/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
      </Routes>
    </div>
  )
}

export default App
