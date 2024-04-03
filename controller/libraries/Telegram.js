const { axiosInstance } = require("./axios");

const sendMessage = (messageObj, messageText) => {
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}
// this handles the message recieved from the bot
const handleMessage = (messageObj) => {
    const messageText = messageObj.text || "";

    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                // we want to send a welcome message to the user.
                return sendMessage(
                    messageObj,
                    "Hi! I'm Black Bot. I can help you get started"
                );

            default:
                return sendMessage(messageObj, "Hey hi, I don't understand that command.")
        }
    } else {
        // we can send same message back to the user
        return sendMessage(messageObj, messageText);
    }
}

module.exports = { handleMessage };