import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const App = () => {
  const navigate = useNavigate()
  const [otp, setotp] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleMobileNumberChange = (e) => {
    const { value } = e.target;
    const mobileNumberRegex = /^\d{6}$/;

    if (value.match(mobileNumberRegex)) {
      setotp(value);
      setErrorMessage('');
      setIsButtonActive(true);
    } else {
      setotp(value);
      setErrorMessage('Invalid OTP Please double-check and try again');
      setIsButtonActive(false);
    }
  };
  const handleSaveButtonClick = () => {
    navigate("/name")
  };
  return (
    <div className='w-full h-screen'>
    <Navbar/>
    <div className="flex justify-center items-center w-full h-[90%]">
      <div className='flex flex-col items-center gap-3 w-96'>
        <h1 className='text-5xl w-[100%] text-center mb-[5%]'>OTP</h1>
        {
          errorMessage===''?(
            <label className="mb-1 text-lg font-semibold text-start w-[90%]" htmlFor="mobileNumber">
        Enter The OTP sent to your mobile
        </label>
          ):(
            <label className="mb-1 text-lg font-semibold text-start w-[90%] text-red-400" htmlFor="mobileNumber">
        Enter The OTP sent to your mobile
        </label>
          )
        }
        <input type='text' placeholder='Enter Your OTP'value={otp} className='w-[90%] p-[4%] border-2 border-gray-200 rounded-lg outline-none' onChange={handleMobileNumberChange}/>
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

export default App
