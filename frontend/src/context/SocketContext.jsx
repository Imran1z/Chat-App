import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'


export const SockectContext =createContext();

export const SockectContextProvider =({children})=>{
    const [sockect, setSockect] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const{authUser}=useAuthContext();
   // console.log(authUser.user._id)


    useEffect(()=>{
        if (authUser) {
            const sockect =io("http://localhost:5000",{
                query:{
                    userId:authUser.user._id,
                }
            });

            setSockect(sockect);

            sockect.on('getOnlineUsers',(users)=>{
                setOnlineUsers(users)
            })

            return ()=> sockect.close()
            
        }else{
           if (sockect) {
            sockect.close();
            setSockect(null)
            
           } 
        }

    },[authUser])

    return(
        <SockectContext.Provider value={{sockect,onlineUsers}}>
            {children}
        </SockectContext.Provider>
    )
}



export const useSocketContext =()=>{
    return useContext(SockectContext)
}