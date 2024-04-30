import React from 'react'

const Sidebar = () => {
  return (
    <div className='hidden sm:block w-[20%] border-r-2 h-screen border-collapse py-[2%]'>
      <div className='w-full flex flex-col items-center text-xl border-seperate'>
      <div className='w-full py-[2%] px-[10%] '>My Dashboard</div>
      <div className='w-full py-[2%] px-[10%]  '>TOTM links</div>
      <div className='w-full py-[2%] px-[10%]  '>Daily Summary</div>
      <div className='w-full py-[2%] px-[10%]  '>Bank Details</div>
      </div>
    </div>
  )
}

export default Sidebar
