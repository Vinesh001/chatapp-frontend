import axios from "axios"
import { useDispatch } from "react-redux";
import { setOtherUsers, setSelectedUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function Logout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async()=>{
        try{
            await axios.post(`https://chatapp-backend-dsrf.onrender.com/api/v1/user/logout`,{
                headers: {
                    'Content-Type': "application/json"
                },
                withCredentials: true
            })
            dispatch(setOtherUsers(null ));
            dispatch(setSelectedUser(null))
            navigate('/login')
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div className="w-full text-center text-lg font-semibold text-white p-2 rounded-md bg-red-500 hover:cursor-pointer" onClick={logoutHandler}>
            Logout
        </div>
    )
}

export default Logout