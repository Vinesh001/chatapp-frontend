import MessageContainerHeader from './MessageContainerHeader.jsx'
import MessageContainerTypingText from './MessageContainerTypingBox.jsx';
import MessageContainerShowsMessages from './MessageContainerShowsMessages.jsx';
import { useSelector } from 'react-redux';

function MessageContainer(){
  const {selectedUser} = useSelector(store=>store.user)
  return(
    selectedUser?(<div className='w-3/4 pl-5 border-l h-[100%] flex flex-col justify-between'>
      <MessageContainerHeader/>
      <MessageContainerShowsMessages/>
      <MessageContainerTypingText/>
    </div>):(<div className='w-3/4 pl-5 border-l h-[100%] flex flex-col justify-center items-center bg-gray-200 text-center text-4xl text-gray-800 font-semibold'>Hello this is your personal chat application </div>)
  )
  
}

export default MessageContainer;