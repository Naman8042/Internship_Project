import React from 'react'
import Navbar from './components/Navbar'
import Bankdetails from './pages/Bankdetails'
import Mobile from './pages/Mobile'
import OTP from './pages/OTP'
import Name from './pages/Name'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='h-full w-full'>
      <Routes>
        <Route path='/admin' element={<Bankdetails/>}/>
        <Route path='/' element={<Mobile/>}/>
        <Route path='/otp' element={<OTP/>}/>
        <Route path='/name' element={<Name/>}/>
      </Routes>
    </div>
  )
}

export default App
