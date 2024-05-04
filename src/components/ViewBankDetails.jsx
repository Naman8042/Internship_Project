import React from 'react'

const ViewBankDetails = ({details}) => {
   const month = ["JAN","FEB","MAR","APR","MAY","JUNE"]
   return (
<div className="w-full md:w-full mx-auto p-[3%]  pt-[1%] md:border-l-2">
          <h1 className="text-3xl font-bold my-[1%] text-start w-full mt-[3%] px-[1%]">Update Bank Details</h1>
          <p className='text-start w-[90%] px-[1%] my-[3%] md:my-[1%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus tenetur laudantium sed non? Sint ea, molestiae blanditiis quasi, quas ut nisi voluptates accusantium, ad quo cumque maxime. Aliquid, officiis quod.</p>

          <div className="flex flex-col gap-4 items-center w-full  md:w-[90%] border-2  py-[2.5%] rounded-lg">
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">ACCOUNT HOLDER NAME</p>
              <div className='w-full  md:w-[50%] flex md:items-center  justify-center md:justify-end md:pr-[4%]'>
              <input
                type="text"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2 bg-green-50"
                value={details.accountHolderName}
                
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">ACCOUNT NUMBER</p>
              <div className='w-full  md:w-[50%] flex md:items-center  justify-center md:justify-end md:pr-[4%]'>
              <input
                type="text"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2 bg-green-50"
                value={details.accountNumber}
                
              />
              </div>
            </div>
            
            
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">IFSC CODE</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%]'>
              <input
                type="text"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2 bg-green-50"
                value={details.ifscCode}
                
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">BANK NAME</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%] '>
              <input
                type="text"
                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2 bg-green-50"
                value={details.bankName}
                
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">BANK CITY</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%] '>
              <input
                type="text"

                className=" w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2 bg-green-50"
                value={details.bankCity}
                              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">BRANCH NAME</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%] '>
              <input
                type="text"
             
                className="w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2 bg-green-50"
                value={details.branchName}
                
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row md:items-center justify-center w-full gap-1 ">
              <p className="w-full md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">RELATION WITH ACCOUNT HOLDER</p>
              <div className='w-full md:w-[50%] flex md:items-center justify-center md:justify-end md:pr-[4%]'>
              <input
                type="text"
              value={details.relation}
                className="w-[90%] md:w-full  p-[2%] rounded-lg outline-none border-2 bg-green-50"

                onChange={(e) => handleChange('relation', e.target.value)}
              />
              </div>
            </div>
            <div className="my-[0.25%] flex flex-col md:flex-row  justify-center w-full gap-1 ">
          
              <p className="w-full sm:pb-[10%] md:w-[50%]  text-start pl-[6%] md:pl-[4%] font-semibold text-lg">CONSENT</p>
              <div className='w-[90%] md:w-[50%] flex flex-col justify-end items-start  gap-3 border-2 py-[2%] px-[2%] rounded-lg mx-[4%]'>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, laborum. Aut illo illum non labore eveniet dolorem eaque iure quis adipisci. Necessitatibus, sapiente reprehenderit consequatur sequi ipsum omnis soluta accusantium!
              </p>
              <p className='font-bold '>
                FILLED ON {month[details.month]} {details.date}, {details.year}
              </p>
              </div>
            </div>
            
            
            
          </div>
          <div className='flex sm:justify-center w-screen'>
          <p className='w-[90%] sm:w-full text-center border-b-2 pb-[2%] my-[5%] md:my:[0.25%] md:text-xl'>The ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT IF ANY OF THESE DETAILS ARE WRONG PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNT @EXAMBAZAAR.COM</p>
          </div>
          </div>
)
}

export default ViewBankDetails
