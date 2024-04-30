import React,{useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import EditableBankDetails from '../components/EditableBankDetails';
import ViewBankDetails from '../components/ViewBankDetails';

const App = () => {
    
  return(
    <>
    <Navbar/>
    <div className='flex w-screen'>
        <Sidebar/>
        <BankDetails />
    </div>
    </>
    
  )
  
}

function BankDetails({ onSave }) {
    const [isEditMode, setIsEditMode] = useState(true); 
    const [details, setDetails] = useState({
      accountHolderName: '',
      accountNumber: '',
      bankName: '',
      branch: '',
      ifscCode: '',
      bankCity:'',
      relation:'',
    });
  
    const handleChange = (name,value) => {
      
      setDetails(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSave = () => {
      setIsEditMode(false);
      onSave(details);
    };
  
    return (
      <div className='w-full md:w-[80%] mx-auto'>
        {isEditMode ? (
          <EditableBankDetails details={details} handleChange={handleChange} onSave={handleSave} />
        ) : (
          <ViewBankDetails details={details} />
        )}
      </div>
    );
  }

export default App
