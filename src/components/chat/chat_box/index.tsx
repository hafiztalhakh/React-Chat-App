import React from 'react';

const ChatBox = () => {
  return (
    <div className='chatBox'>
      <div className='messageBubble'>
        <div className='avatar'>
          <img src='/assets/avatar.png' alt='SenderAvatar' />
        </div>
        <div className='message'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className='time'>
            <span>5:00 pm</span>
          </div>
        </div>
      </div>
      <div className='messageBubble own'>
        <div className='message'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className='time'>
            <span>5:00 pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
