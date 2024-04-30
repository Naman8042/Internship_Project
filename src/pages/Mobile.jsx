import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const Mobile = () => {
  const navigate = useNavigate()
  const [mobileNumber, setMobileNumber] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleMobileNumberChange = (e) => {
    const { value } = e.target;
    const mobileNumberRegex = /^[6-9][0-9]{9}$/;

    if (value.match(mobileNumberRegex)) {
      setMobileNumber(value);
      setErrorMessage('');
      setIsButtonActive(true);
    } else {
      setMobileNumber(value);
      setErrorMessage('Invalid Mobile Number Detected please enter a valid phone number');
      setIsButtonActive(false);
    }
  };
  const handleSaveButtonClick = () => {
    navigate("/otp")
  };
  return (
    <div className='w-full h-screen'>
    <Navbar/>
    <div className="flex justify-center items-center w-full h-[90%] ">
      <div className='flex flex-col items-center gap-3 w-96'>
        <h1 className='text-5xl w-[100%] text-center mb-[5%]'>Login</h1>
        {
          errorMessage===''?(
            <label className="mb-1 text-lg font-semibold text-start w-[90%]" htmlFor="mobileNumber">
        Enter Your Mobile Number
        </label>
          ):(
            <label className="mb-1 text-lg font-semibold text-start w-[90%] text-red-400" htmlFor="mobileNumber">
        Enter Your Mobile Number
        </label>
          )
        }
        <input type='text' placeholder='Mobile Number' className='w-[90%] p-[4%] border-2 border-gray-200 rounded-lg outline-none' onChange={handleMobileNumberChange}/>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className='flex justify-end w-[90%]'>
        <button
        className={`w-32 px-4 py-2 rounded-md ${
          isButtonActive
            ? 'bg-blue-500 text-white cursor-pointer'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        onClick={handleSaveButtonClick}
        disabled={!isButtonActive}
      >
        Submit
      </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mobile
