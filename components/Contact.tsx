import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black text-white'>
      <div className="container mx-auto h-screen flex items-center">
        <div className="flex justify-between w-full gap-5">
            <div className="flex gap-3 flex-col flex-1">
                <div className="flex flex-col">
                    <label htmlFor="" className='text-sm mb-1'>Name</label>
                    <input type="text" placeholder='Name' className='px-7 py-2 text-sm border-[1px] border-gray-700/50 outline-none rounded bg-transparent focus:border-blue-700' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className='text-sm mb-1'>Email</label>
                    <input type="text" placeholder='Email' className='px-7 py-2 text-sm border-[1px] border-gray-700/50 outline-none rounded bg-transparent focus:border-blue-700' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className='text-sm mb-1'>Phone</label>
                    <input type="text" placeholder='Phone' className='px-7 py-2 text-sm border-[1px] border-gray-700/50 outline-none rounded bg-transparent focus:border-blue-700' />
                </div>
            </div>

            <div className="flex-1 flex gap-3 flex-col">
                <div className="flex flex-col">
                    <label htmlFor="" className='text-sm mb-1'>Subject</label>
                    <input type="text" placeholder='Subject' className='px-7 py-2 text-sm border-[1px] border-gray-700/50 outline-none rounded bg-transparent focus:border-blue-700' />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className='text-sm mb-1'>Message</label>
                    <textarea placeholder='Message' className='px-7 h-28 py-2 text-sm border-[1px] border-gray-700/50 outline-none rounded bg-transparent focus:border-blue-700' />
                </div>
                <button className='mt-5 py-2 text-sm rounded bg-blue-700'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
