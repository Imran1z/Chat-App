import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";


const useSendMessages = () => {
 
    const [loading, setLoading] = useState(false);
    const {selectedConversation, messages,setMessages}= useConversation();

    const sendMessage=async(message)=>{
        setLoading(true)
        try {
            const res =await fetch(`/api/v1/message/send/${selectedConversation._id}`,{
                method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({message}),
            });

            const data =await res.json();
          //  console.log("useSendMessages data",data)
            if (data.error) {
                throw new Error(data.error)
            }
            setMessages([...messages,data])
            
        } catch (error) {
            toast.error(error.message);
            
        }finally{
            setLoading(false)
        }
    }

    return{loading, sendMessage}

}

export default useSendMessages