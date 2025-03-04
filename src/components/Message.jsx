import { useSelector } from "react-redux";
import MessageLeft from "./MessageLeft.jsx";
import MessageRight from "./MessageRight.jsx";
import useGetMessages from "../hooks/useGetMessages.jsx";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage.jsx";


function Message() {
  useGetMessages()
  useGetRealTimeMessage()
  const { messages } = useSelector((store) => store.message);
  const { authUser } = useSelector((store) => store.user);
  console.log("authUser._id:", authUser?._id);
messages?.forEach((msg, idx) => {
  // console.log(`Message ${msg}: senderId = ${msg.senderId}, recieverId = ${msg.recieverId}`);
});

  
  // if(messages==null)return
  

  return (
    <div className="h-[100%]">
      {messages?.map((message, idx) => 
        String(message?.senderId).trim() === String(authUser?._id).trim() ? (
          <MessageRight key={idx} message={message} />
        ) : (
          <MessageLeft key={idx} message={message} />
        )
      )}
    </div>
  );
}

export default Message;
