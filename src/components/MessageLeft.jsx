import { useSelector } from "react-redux";
import register from "../assets/register.jpg";
import { useEffect, useRef } from "react";

function MessageLeft({key, message}) {
  const {selectedUser}  = useSelector(store=>store.user)
  const scroll = useRef();
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"})
  }, [message])
  return (
    <div ref={scroll}  key={key} className="max-w-[700px] p-2 flex gap-2 ">
      <div>
        <img
          src={selectedUser.profilePhoto}
          alt="selectedUser"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="bg-gray-800 p-2 rounded-md">
        <div className="text-red-500">{selectedUser.fullName}</div>
        <div className="flex items-end">
          {/* {
            messages.map((message, idx)=>{
              return<> */}
                <div className="text-[15px] text-gray-200">{message?.message}</div>
                <div className="text-[10px] text-gray-400">10:33</div>
              {/* </>
            })
          } */}
        </div>
      </div>
    </div>
  );
}

export default MessageLeft;
