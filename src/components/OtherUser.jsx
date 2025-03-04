import { useDispatch, useSelector } from "react-redux"
import { setSelectedUser } from "../redux/userSlice";

function OtherUser({user}){

    const {selectedUser} = useSelector(store=>store.user)
    const dispatch = useDispatch();

    function selectedUserHandler(user){
        dispatch(setSelectedUser(user))
        console.log(user)
    }
    return(
        <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser!=null&&selectedUser?._id==user?._id?'bg-gray-400 hover:bg-gray-400':''} hover:cursor-pointer flex gap-2 items-center hover:bg-gray-200 p-2 rounded-sm`} >
            <div>
                <img src={user.profilePhoto} alt="register" width={50} height={50} className='rounded-full'/>
            </div>
            <div>
                <div className='text-[16px] text-gray-800 font-semibold'>{user.fullName}</div>
                <div className='text-[12px] text-gray-700'>Latest Message</div>
            </div>
        </div>
    )
}

export default OtherUser