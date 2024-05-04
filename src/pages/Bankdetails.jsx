import React,{useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import EditableBankDetails from '../components/EditableBankDetails';
import ViewBankDetails from '../components/ViewBankDetails';

const App = () => {
  const[load,setLoad] = useState(true)
  function Load(){
    setLoad(!load)
  }
  return(
    <>
    <Navbar Load={Load} load={load}/>
    <div className='flex w-screen'>
        <Sidebar/>
        <BankDetails />
    </div>
    </>
    
  )
  
}

function BankDetails({ onSave }) {
    const [isEditMode, setIsEditMode] = useState(true); 
    const d = new Date()
    const [details, setDetails] = useState({
      accountHolderName: '',
      accountNumber: '',
      bankName: '',
      branch: '',
      ifscCode: '',
      bankCity:'',
      relation:'',
      date:'',
      month:'',
      year:''
    });
  
    const handleChange = (name,value) => {
      
      setDetails(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSave = () => {
      setIsEditMode(false);
      details.date = d.getDate() 
      details.month = d.getMonth()
      details.year = d.getFullYear()
      onSave(details);
    };
  
    return (
      <div className='w-full md:w-[80%] mx-auto '>
        {isEditMode ? (
          <EditableBankDetails details={details} handleChange={handleChange} onSave={handleSave} />
        ) : (
          <ViewBankDetails details={details} />
        )}
      </div>
    );
  }

export default App
