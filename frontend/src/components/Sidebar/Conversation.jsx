import React from 'react'
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation, lastIdx}) => {
   const {selectedConversation, setSelectedConversation}= useConversation();

   //check the selected chat
   const isSelected = selectedConversation?._id === conversation._id;

   // console.log(conversation)
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-customGray rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-slate-600" : ""}`}
		onClick={() => setSelectedConversation(conversation)}>

        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt='avatar'/>
            </div>
        </div>
        {/* <div className="avatar offline">
            <div className="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div> */}

        <div className='flex flex-col flex-1'>
            <div className=' gap-3 '>
                <p className='font-bold text-gray-400'>{conversation.fullName}</p>
                
            </div>

        </div>
        </div>

        {!lastIdx && <div className='divider my-0 py-0 h-1'/> }

    </>
  )
}

export default Conversation