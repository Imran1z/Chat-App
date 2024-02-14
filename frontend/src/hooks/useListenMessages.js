import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

//import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { sockect } = useSocketContext();
   // console.log(sockect)
	const { messages, setMessages } = useConversation();

	useEffect(() => {
        if(!sockect)return;
		sockect?.on("newMessage", (newMessage) => {
			// newMessage.shouldShake = true;
			// const sound = new Audio(notificationSound);
			// sound.play();
			setMessages([...messages, newMessage]);
           // console.log("messages from use listen",newMessage)
		});

		return () => sockect?.off("newMessage");
	}, [sockect, setMessages, messages]);
};
export default useListenMessages;