import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const {selectedConversation, messages,setMessages}= useConversation();


    useEffect(() => {

        const getMessages =async()=>{
            setLoading(true)
            try {
                const res =await fetch(`/api/v1/message/${selectedConversation._id}`);

                const data =await res.json();
          //  console.log("useSendMessages data",data)
            if (data.error) {
                throw new Error(data.error)
            }

            setMessages(data)
            } catch (error) {
                toast.error(error.message);

            }finally{
                setLoading(false)
            }
        }
        if (selectedConversation?._id) {
            getMessages();
        }
     
    }, [selectedConversation?._id]);


    return {messages,loading};
    
}

export default useGetMessages