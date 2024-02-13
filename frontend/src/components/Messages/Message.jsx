import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { formatTime } from '../../utils/formatTime';

const Message = ({message}) => {
  const{authUser}=useAuthContext();
  const{selectedConversation}=useConversation();

  const fromMe = message.senderId === authUser.user._id;

  const chatClassName =fromMe? 'chat-end':'chat-start'

  const profilePic =fromMe? authUser.user.profilePic :selectedConversation?.profilePic;

  const bubbleColor= fromMe? 'bg-customGray':"";

  const formatedTime = formatTime(message.createdAt);
  
  return (
    <div className={`chat ${chatClassName}`}>
          <div className='chat-image avatar'>
            <div className='w-8 rounded-full'>
              <img src={profilePic} alt='avatar'/>

            </div>
          </div>
          <div className={`chat-bubble text-white ${bubbleColor} pb-2`}>{message.message}</div>
          <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formatedTime}</div>

    </div>
  )
}

export default Message