import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js';
import { getReceiverSockectId,io } from '../socket/socket.js';

export const sendMessage = async(req, res)=>{
    try {
        const {message}=req.body;
        const {id:recieverId}=req.params;

        const senderId =req.user._id;


       let conversation= await Conversation.findOne({
          participants:{$all:[senderId,recieverId]}
       });

       if (!conversation) {
        conversation = await Conversation.create({
            participants:[senderId, recieverId]
        })
       }

       const newMessage =new Message({
        senderId,
        recieverId,
        message,
       });


       if (newMessage) {
        conversation.messages.push(newMessage._id)
        
       }
       
       await Promise.all([conversation.save(), newMessage.save()]);



       const recieverSocketId =getReceiverSockectId(recieverId);
    //    console.log("recieverId",recieverId)
    //    console.log("recieverSocketId",recieverSocketId)
       if (recieverSocketId) {
        io.to(recieverSocketId).emit("newMessage", newMessage);
    }


       res.status(201).json(newMessage);


    } catch (error) {
        console.log(error)
        console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}


export const getMessage = async(req, res)=>{
    try {
        const {id:recieverId}=req.params;
        const senderId =req.user._id;


        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,recieverId]}
        }).populate("messages");  //now this will not give the ids but it will give the messages as an object

        if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);

        
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}