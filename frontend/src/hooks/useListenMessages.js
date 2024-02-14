import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
    const {socket}=useSocketContext();
    const {messages,setMessages}=useConversation();

    useEffect(() => {
        if (!socket) return; // Guard against socket being undefined

        socket?.on("newMessage",(newMessage)=>{
        setMessages([...messages,newMessage])
      })

      return ()=> socket?.off("newMessage")
    }, [socket,setMessages])
    
  
}

export default useListenMessages
