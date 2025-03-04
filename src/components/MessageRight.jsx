import { useEffect, useRef } from "react";

function MessageRight({key, message}) {
  const scroll = useRef();
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"})
  }, [message])
  return (
    <div ref={scroll}  key={key} className="max-w-[-700px] p-2 flex gap-2 justify-end ml-[10rem] ">
      <div className="bg-gray-800 p-2 rounded-md flex items-end">
          <div className="text-[15px] text-gray-200">{message?.message} </div>
          <div className="text-[10px] text-gray-400">10:33</div>
      </div>
    </div>
  );
}

export default MessageRight;
