import React from 'react'

const ViewBankDetails = ({details}) => {
    return (
    
        <div className='w-full md:w-[80%] mx-auto p-[2%] flex flex-col items-center'>
        <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-[4%]">Update Bank Details</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl">Account Holder Name</p>
              <input
                type="text"
                
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none bg-green-100"
                value={details.accountHolderName}
                readOnly
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl">IFSC CODE</p>
              <input
                type="text"
                
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none bg-green-100"
                value={details.ifscCode}
                readOnly
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl outline-none">BANK NAME</p>
              <input
                type="text"
                
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none bg-green-100"
                value={details.bankName}
                readOnly
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl outline-none">BANK CITY</p>
              <input
                type="text"
                
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none bg-green-100"
                value={details.bankCity}
                readOnly
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl outline-none">BRANCH NAME</p>
              <input
                type="text"
                
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none bg-green-100"
                value={details.branch}
                readOnly
              />    
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl outline-none">RELATION WITH ACCOUNT HOLDER</p>
              <input
                type="text"
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none bg-green-100"
                value={details.relation}
                readOnly
              />    
             </div>
          
          </div>
          
         
        </div>
      );
}

export default ViewBankDetails
