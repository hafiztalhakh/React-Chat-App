import React from 'react';

const ChatInputBox = () => {
  return (
    <div className='chatInputBox'>
      <ul className='actionButtonsList'>
        <li>
          <button>
            <img className='icon' src='/assets/img.png' alt='UpdalodIcon' />
          </button>
        </li>
        <li>
          <button>
            <img className='icon' src='/assets/camera.png' alt='CameraIcon' />
          </button>
        </li>
        <li>
          <button>
            <img className='icon' src='/assets/mic.png' alt='MicIcon' />
          </button>
        </li>
      </ul>
      <div className='messageBox'>
        <input type='text' placeholder='Type your message here..' />
      </div>
      <div className='emojiButton'>
        <button className='iconButton'>
          <img className='icon' src='/assets/emoji.png' alt='EmojiIcon' />
        </button>
      </div>
      <div className='sendButton'>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatInputBox;
