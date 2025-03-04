import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
    const {socket} = useSelector(store=>store.socket);
    const {messages} = useSelector(store=>store.message);
    const dispatch = useDispatch();
    console.log("useGetRealTimeMessage")
    useEffect(()=>{
        console.log("hhhhhhh")
        socket?.on("newMessage", (newMessage)=>{
            console.log("newMessage",newMessage)
            dispatch(setMessages([...messages, newMessage]));
        });
        return () => socket?.off("newMessage");
    },[setMessages, messages]);
};
export default useGetRealTimeMessage;