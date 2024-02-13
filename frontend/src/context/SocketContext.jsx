import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'


export const SockectContext =createContext();

export const SockectContextProvider =({children})=>{
    const [sockect, setSockect] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const{authUser}=useAuthContext();


    useEffect(()=>{
        if (authUser) {
            const sockect =io("http://localhost:5000");

            setSockect(sockect);

            return ()=> sockect.close()
            
        }else{
           if (sockect) {
            sockect.close();
            setSockect(null)
            
           } 
        }

    },[])

    return(
        <SockectContext.Provider value={{sockect,onlineUsers}}>
            {children}
        </SockectContext.Provider>
    )
}