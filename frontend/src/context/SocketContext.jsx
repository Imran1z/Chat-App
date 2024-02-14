import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'


export const SockectContext =createContext();

export const SockectContextProvider =({children})=>{
    const [socket, setSockect] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const{authUser}=useAuthContext();


    useEffect(()=>{
        if (authUser) {
            const socket =io("http://localhost:5000",{
                query:{
                    userId:authUser.user._id,
                }
            });

            setSockect(socket);

            socket.on('getOnlineUsers',(users)=>{
                setOnlineUsers(users)
            })

            return ()=> socket.close()
            
        }else{
           if (socket) {
            socket.close();
            setSockect(null)
            
           } 
        }

    },[authUser])

    return(
        <SockectContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SockectContext.Provider>
    )
}



export const useSocketContext =()=>{
    return useContext(SockectContext)
}