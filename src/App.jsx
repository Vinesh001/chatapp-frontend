import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useEffect } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import HomePage from './components/HomePage'
import { useDispatch, useSelector } from 'react-redux'
import { setSocket } from './redux/socketSlice'
import io from "socket.io-client";
import useGetAuthUser from './hooks/useGetAuthUser.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/register',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  },
])

function App() {
  const {authUser} = useSelector(store=>store.user);
  const {socket} = useSelector(store=>store.socket);
  const dispatch = useDispatch();
  useGetAuthUser();

  useEffect(()=>{
    if(authUser){
      const socketio = io(`https://chatapp-backend-dsrf.onrender.com`, {
          query:{
            userId:authUser._id
          }
      });
      
      socketio.on('connect', ()=>{
        console.log("socketio ", socketio.connected)
        dispatch(setSocket(socketio));
      })
      
      return () => socketio.close();
    }else{
      if(socket){
        socket.close();
        dispatch(setSocket(null));
      }
    }

  },[authUser]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
