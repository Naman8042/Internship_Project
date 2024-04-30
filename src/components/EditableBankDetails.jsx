import React from 'react'

const EditableBankDetails = ({ details, handleChange, onSave }) => {

    return (
        <div className="w-full md:w-[80%] mx-auto p-[2%] flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-[4%]">Update Bank Details</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl">Account Holder Name</p>
              <input
                type="text"
                placeholder="Account Holder Name"
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none border-2"
                value={details.accountHolderName}
                onChange={(e) => handleChange('accountHolderName', e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl">IFSC CODE</p>
              <input
                type="text"
                placeholder="IFSC CODE"
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none border-2"
                value={details.ifscCode}
                onChange={(e) => handleChange('ifscCode', e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl">BANK NAME</p>
              <input
                type="text"
                placeholder="BANK NAME"
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none border-2"
                value={details.bankName}
                onChange={(e) => handleChange('bankName', e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl">BANK CITY</p>
              <input
                type="text"
                placeholder="BANK CITY"
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none border-2"
                value={details.bankCity}
                onChange={(e) => handleChange('bankCity', e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl">BRANCH NAME</p>
              <input
                type="text"
                placeholder="BRANCH NAME"
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none border-2"
                value={details.branch}
                onChange={(e) => handleChange('branch', e.target.value)}
              />    
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="w-full md:w-[50%] font-bold text-xl">RELATION WITH ACCOUNT HOLDER</p>
              <input
                type="text"
                placeholder="RELATION"
                className="w-full md:w-[40%] rounded-lg p-[2%] outline-none border-2"
                value={details.relation}
                onChange={(e) => handleChange('relation', e.target.value)}
              />    
             </div>
          
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={onSave}>Save</button>
        </div>
    )
}

export default EditableBankDetails
