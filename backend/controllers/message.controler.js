import Converstion from "../models/converstion.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        // Get message and receiver ID
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const sendersId = req.user._id;

        // Find or create conversation
        let conversation = await Converstion.findOne({
            participants: { $all: [sendersId, receiverId] }
        });
        if (!conversation) {
            conversation = await Converstion.create({
                participants: [sendersId, receiverId],
                messages: [] // Initialize messages array
            });
        }

        // Create and save new message
        const newMessage = await Message.create({
            senderId: sendersId,
            receiverId: receiverId,
            message: message
        });

        // Push message ID to conversation's messages array
        conversation.messages.push(newMessage._id);

        // Socket Io functionality wil go here

        // await conversation.save();
        // await newMessage.save();

        // Optimisation 
        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error in sending message:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;

        const sendersId = req.user._id;

        const conversation = await Converstion.findOne({
            participants: { $all: [sendersId, userToChatId] }
        }).populate("messages"); 

        res.status(200).json(conversation.messages);
    } catch(error) {
        console.error("Error in getting messages:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
