import register from '../assets/register.jpg'
import { useSelector } from 'react-redux';

function MessageContainerHeader(){
    const {selectedUser} = useSelector(store=>store.user)
    return(
        <div className='flex gap-5 items-center bg-gray-800 text-gray-300 p-2 rounded-tl-md rounded-tr-md'>
            <div>
                <img src={selectedUser.profilePhoto} alt="register" width={50} height={50} className='rounded-full'/>
            </div>
            <div>
                <div>{selectedUser.fullName}</div>
            </div>
        </div>
    )
}

export default MessageContainerHeader;