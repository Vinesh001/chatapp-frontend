import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import axios from "axios";


function useGetMessages(){

    const {selectedUser} = useSelector(store=>store.user);
    const dispatch = useDispatch();
    console.log("su",selectedUser)
    // console.log(authUser)
    useEffect(()=>{
        const getAllMessages=async()=>{
            try{
                console.log("getMessages")
                axios.defaults.withCredentials = true;
                const res = await axios.get(`https://chatapp-backend-dsrf.onrender.com/api/v1/message/${selectedUser?._id}`,{
                    headers: {
                        'Content-Type': "application/json"
                    },
                })
                console.log("messages",res.data.messages)
                dispatch(setMessages(res.data.messages))
            }catch(error){
                console.log(error)
            }
        }
        getAllMessages();
    }, [selectedUser])
    
}
export default useGetMessages;