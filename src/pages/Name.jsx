import React,{useState} from 'react'
import Navbar from '../components/Navbar';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
    validateName(inputName);
  };

 
  const validateName = (inputName) => {
    if (!inputName.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
    checkFormCompletion(inputName, email);
  };

  
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };


  const validateEmail = (inputEmail) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputEmail.trim()) {
      setEmailError('Email is required');
    } else if (!emailPattern.test(inputEmail)) {
      setEmailError('please enter a valid email address');
    } else {
      setEmailError('');
    }
    checkFormCompletion(name, inputEmail);
  };


  const checkFormCompletion = (inputName, inputEmail) => {
    if (inputName.trim() !== '' && inputEmail.trim() !== '') {
      setIsSaveButtonActive(true);
    } else {
      setIsSaveButtonActive(false);
    }
  };
  return (
    <div className='w-full h-screen'>
      <Navbar/>
    <div className="flex justify-center items-center  w-full h-[90%]">
      <div className='flex flex-col items-center gap-3 w-96'>
      <h1 className='text-5xl w-[100%] text-center mb-[5%]'>Profile</h1>
      <div className='w-[100%]'>
        <label htmlFor="nameInput" className='mb-1 text-lg font-semibold text-start w-[90%]'>Enter Your Name</label>
        <br/>
        <input
          type="text"
          placeholder='Name'
          id="nameInput"
          style={{ backgroundColor: name.trim() !== '' ? '#EFF6FF' : 'transparent' }}
          value={name}
          className='w-[90%] p-[4%] border-2 border-gray-200 rounded-lg outline-none'
          onChange={handleNameChange}
        />
        {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
      </div>
      <div className='w-[100%]'>
        <label htmlFor="emailInput" className='mb-1 text-lg font-semibold text-start w-[90%]'>Enter Your Email Id</label>
        <br/>
        <input
          type="email"
          id="emailInput"
          placeholder='Email'
          style={{ backgroundColor: email.trim() !== '' ? '#EFF6FF' : 'transparent' }}
          className='w-[90%] p-[4%] border-2 border-gray-200 rounded-lg outline-none'
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      </div>
      <button
        className={`w-32 px-4 py-2 rounded-md ${
          isSaveButtonActive
            ? 'bg-blue-500 text-white cursor-pointer'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!isSaveButtonActive}
      >
        Submit
      </button>
       
      </div>
    </div>
    </div>
  )
}

export default App
