// Conversations.jsx
import React, { useState } from 'react';
import Message from './Message';
import EnterMessage from './EnterMessage.jsx'

const Conversations = () => {
  const [user, setUser] = useState(0);

  const NewConversation = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-4">Start a New Conversation</h1>
        <p className="text-lg text-gray-600 mb-8">You haven't started any conversations yet.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setUser(1)}
        >
          Start a New Conversation
        </button>
      </div>
    );
  };

  const Convo = () => {
    return (
      <>
      <div className='py-2 flex flex-col overflow-y-scroll h-[83%]'>
        <Message sender="Me" message="Hi" />
        <Message sender="fe" message="Hello" />
        <Message sender="Me" message="Sup ds" />
        <Message sender="Msfdfe" message="kfihkdfsalkj;fwedsiojesljicdjdfsaljidsalijsadildsfiljdfskljdsakjlkjldsjklsadkjldsakjldsakjldasjkldm,.dskdldsajlk;dfsaljkljk;dsaflkadsflk;jfdasljk;sfdjkl;dfsjlkdfsjlkfjkldfjkldfzz" />
        <Message sender="Me" message="Hi" />
        <Message sender="fe" message="Hello" />
        <Message sender="Me" message="Sup ds" />
        <Message sender="Msfdfe" message="kfihkdfsalkj;fwedsiojesljicdjdfsaljidsalijsadildsfiljdfskljdsakjlkjldsjklsadkjldsakjldsakjldasjkldm,.dskdldsajlk;dfsaljkljk;dsaflkadsflk;jfdasljk;sfdjkl;dfsjlkdfsjlkfjkldfjkldfzz" />
        <Message sender="Me" message="Hi" />
        <Message sender="fe" message="Hello" />
        <Message sender="Me" message="Sup ds" />
        <Message sender="Msfdfe" message="kfihkdfsalkj;fwedsiojesljicdjdfsaljidsalijsadildsfiljdfskljdsakjlkjldsjklsadkjldsakjldsakjldasjkldm,.dskdldsajlk;dfsaljkljk;dsaflkadsflk;jfdasljk;sfdjkl;dfsjlkdfsjlkfjkldfjkldfzz" />
      </div>
      <EnterMessage/>
      </>
    );
  };

  return (
    user === 0 ? <NewConversation /> : <Convo />
  );
};

export default Conversations;
