import Sidebar from './Sidebar.jsx'
import MessageContainer from './MessageContainer.jsx'



function HomePage(){
  
  return(
    <div className='flex p-5 h-screen  w-screen'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage;