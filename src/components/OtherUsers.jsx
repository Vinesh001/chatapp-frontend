import useGetOtherUsers from "../hooks/useGetOtherUsers";
import OtherUser from "./OtherUser"
import { useSelector } from "react-redux"

function OtherUsers(){

    useGetOtherUsers();
    const {otherUsers} = useSelector(store=>store.user)
    // console.log(OtherUsers)

    if(!otherUsers)return;
    return(
        <div className="mt-3 mb-3">
            {
               otherUsers?.map((user)=>{
                return(
                    <OtherUser key={user._id} user={user}/>
                )
               })
            }
        </div>
    )
}

export default OtherUsers