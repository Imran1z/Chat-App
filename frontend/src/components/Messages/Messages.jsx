// import React, { useEffect, useRef } from 'react'
// import Message from './Message'
// import useGetMessages from '../../hooks/useGetMessages'
// import MessageSkeletons from '../skeletons/MessageSkeletons';
// import { useAuthContext } from '../../context/AuthContext';
// import useListenMessages from '../../hooks/useListenMessages';

// const Messages = () => {
// 	const{messages,loading} = useGetMessages();
// 	useListenMessages()
// 	const lastMessageRef =useRef();


// 	useEffect(()=>{
// 		setTimeout(() => {
// 			lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
// 		}, 100);
// 	},[messages])
//     return (
//         		<div className='px-4 flex-1 overflow-auto'>
// 				{
// 					!loading && messages.length !== 0 && messages.map((message,index)=>(
// 						<div key={index} ref={index === messages.length - 1 ? lastMessageRef : null}>
// 						<Message
							
// 							message={message}
// 						/>
// 						</div>
// 					))
// 				}

// 				{loading && [...Array(6)].map((_, idx) => <MessageSkeletons key={idx} />)}
// 			   {!loading && messages.length === 0 && (
// 				<p className='text-center'>Send a message to start the conversation</p>
// 			)}
        			
        			
//         		</div>
//   )
// }

// export default Messages



import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeletons from '../skeletons/MessageSkeletons';
import { useAuthContext } from '../../context/AuthContext';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const chatContainerRef = useRef();

    useEffect(() => {
        // Scroll to the bottom when messages are loaded or changed
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className='px-4 flex-1 overflow-auto' ref={chatContainerRef}>
            {!loading && messages.length !== 0 && messages.map((message, index) => (
                <div key={index}>
                    <Message message={message} />
                </div>
            ))}

            {loading && [...Array(6)].map((_, idx) => <MessageSkeletons key={idx} />)}
            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
    );
}

export default Messages;
