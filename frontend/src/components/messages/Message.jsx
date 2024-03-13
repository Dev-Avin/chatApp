import React from 'react';

const Message = ({ sender, message }) => {
  return (
    <div className={`p-3 flex flex-row items-center ${sender === "Me" ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[45%] rounded-md text-wrap overflow-scroll break-words ${sender === "Me" ? 'bg-sky-500' : 'bg-slate-500'}`}>
        <p className="m-1">{message}</p>
      </div>
    </div>
  );
};

export default Message;
