import {create} from 'zustand'

const useConversation =create((set)=>({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    //setMessages:(messages)=>set({messages})
    setMessages: (newMessages) => set((state) => ({ messages: [...state.messages, ...newMessages] })),

}))


export default useConversation;