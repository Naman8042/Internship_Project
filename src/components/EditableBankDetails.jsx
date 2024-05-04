import React from 'react'

const EditableBankDetails = ({ details, handleChange, onSave }) => {
  

    return (
        <div className="w-full md:w-full mx-auto p-[3%]  pt-[1%] border-l-2">
          <h1 className="text-3xl font-bold my-[1%] text-start w-full mt-[3%] px-[1%]">Update Bank Details</h1>
          <p className='text-start w-[90%] px-[1%] my-[3%] md:my-[1%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus tenetur laudantium sed non? Sint ea, molestiae blanditiis quasi, quas ut nisi voluptates accusantium, ad quo cumque maxime. Aliquid, officiis quod.</p>

          <div className="flex flex-col gap-4 items-center w-full  md:w-[90%] border-2  py-[2.5%] rounded-lg">
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">ACCOUNT HOLDER NAME</p>
              <div className='w-full  md:w-[50%] flex md:items-center  justify-center md:justify-end md:pr-[4%]'>
              <input
                type="text"
                placeholder="Account Holder Name"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2"
                value={details.accountHolderName}
                onChange={(e) => handleChange('accountHolderName', e.target.value)}
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">ACCOUNT NUMBER</p>
              <div className='w-full  md:w-[50%] flex md:items-center  justify-center md:justify-end md:pr-[4%]'>
              <input
                type="text"
                placeholder="Account Number"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2"
                value={details.accountNumber}
                onChange={(e) => handleChange('accountNumber', e.target.value)}
              />
              </div>
            </div>
            
            
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">IFSC CODE</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%]'>
              <input
                type="text"
                placeholder="IFSC Code"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2"
                value={details.ifscCode}
                onChange={(e) => handleChange('ifscCode', e.target.value)}
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">BANK NAME</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%] '>
              <input
                type="text"
                placeholder="Bank Name"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2"
                value={details.bankName}
                onChange={(e) => handleChange('bankName', e.target.value)}
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">BANK CITY</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%] '>
              <input
                type="text"
                placeholder="Bank City"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2"
                value={details.bankCity}
                onChange={(e) => handleChange('bankCity', e.target.value)}
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">BRANCH NAME</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%] '>
              <input
                type="text"
                placeholder="Branch Name"
                className="w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2"
                value={details.branchName}
                onChange={(e) => handleChange('branchName', e.target.value)}
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">RELATION WITH ACCOUNT HOLDER</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%]'>
              <input
                type="text"
                placeholder="Relation with Account Holder"
                className="w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2"
                value={details.relation}
                onChange={(e) => handleChange('relation', e.target.value)}
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row  justify-center w-full gap-1 ">
          
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">CONSENT</p>
              <div className='w-[90%] md:w-[50%] flex justify-end items-start  gap-3 border-2 py-[2%] px-[2%] rounded-lg mx-[4%]'>
              <div className='flex pt-[5%]'>
              <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
              </div>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, laborum. Aut illo illum non labore eveniet dolorem eaque iure quis adipisci. Necessitatibus, sapiente reprehenderit consequatur sequi ipsum omnis soluta accusantium!
              </p>
              </div>
            </div>
            <div className='w-full flex justify-end px-[4%]'>
            <button className='bg-green-700 text-white py-[1%] px-[3%]' onClick={onSave}>
              Save
            </button>
            </div>
            
            
          </div>
          <p className='w-[90%] text-center border-b-2 pb-[2%] my-[5%] md:my:[0.25%] md:text-xl'>The ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT IF ANY OF THESE DETAILS ARE WRONG PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNT @EXAMBAZAAR.COM</p>
          </div>
    )
}

export default EditableBankDetails
