import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-customGray rounded p-2 py-1 cursor-pointer'>
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='avatar'/>
            </div>
        </div>
        {/* <div className="avatar offline">
            <div className="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div> */}

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-400'>Imran Ahmed</p>
                <span>🎃</span>
            </div>

        </div>
        </div>

        <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation