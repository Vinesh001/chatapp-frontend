import { useState } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";

function MessageContainerTypingText(){
    const [text, setText] = useState("");
    const {selectedUser} = useSelector(store=>store.user)
    const {messages} = useSelector(store=>store.message)
    const dispatch = useDispatch();
    const messageSentHandler = async(e)=>{
        e.preventDefault();
        // console.log(text)
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.post(`https://chatapp-backend-dsrf.onrender.com/api/v1/message/send/${selectedUser?._id}`, {message:text},{
                headers: {
                    'Content-Type': "application/json"
                },
            })
            dispatch(setMessages([...messages,res.data.message]))
            // useGetRealTimeMessage()
            setText("")
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div className="bg-gray-100 rounded-br-md rounded-bl-md ">
            <form onSubmit={messageSentHandler}>
                <div className="flex items-center">
                    <input type="text" value={text} onChange={(e)=>{
                        setText(e.target.value)
                    }} className="w-full bg-gray-800 text-gray-200 text-md p-2 pl-5 rounded-full" />
                    <div type="submit" className="bg-gray-800 text-gray-400 hover:text-gray-300  p-2 rounded-full">
                        <HiOutlinePaperAirplane  className="text-2xl rounded-full"/>
                    </div>
                    
                </div>
                
            </form>
            
        </div>
    )
}

export default MessageContainerTypingText