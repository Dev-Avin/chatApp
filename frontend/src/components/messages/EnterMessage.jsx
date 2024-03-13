import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageInput = () => {
  return (
    <form className='flex items-center gap-2 justify-center bg-slate-300 bg-opacity-30 rounded-lg p-2 py-1'>
      <textarea
        placeholder="Type a message..."
        className='input-bordered rounded-lg w-[90%] p-1 h-[40px] min-h-[40px] resize-none'
        rows={1} // Initial number of rows
        style={{ minHeight: '40px', maxHeight: '120px' }} // Min and Max height for expanding
      />
      <button type="submit" className='btn btn-circle bg-sky-500 text-white m-1'>
        <FontAwesomeIcon className='w-6 h-6' icon={faPaperPlane} />
      </button>
    </form>
  );
}

export default MessageInput;
