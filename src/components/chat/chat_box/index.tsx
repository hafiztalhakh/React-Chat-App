const ChatBox = () => {
  return (
    <div className='chatBox'>
      <div className='messageBubble'>
        <div className='avatar'>
          <img src='/assets/avatar.png' alt='SenderAvatar' />
        </div>
        <div className='message'>
          <div className='text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='right-corner'>
              <span>5:00 pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className='messageBubble own'>
        <div className='message'>
          <div className='text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='right-corner'>
              <span>5:00 pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className='messageBubble'>
        <div className='avatar'>
          <img src='/assets/avatar.png' alt='SenderAvatar' />
        </div>
        <div className='message'>
          <div className='text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='right-corner'>
              <span>5:00 pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className='messageBubble'>
        <div className='avatar'>
          <img src='/assets/avatar.png' alt='SenderAvatar' />
        </div>
        <div className='message'>
          <div className='media'>
            <img
              src='https://weimaracademy.org/wp-content/uploads/2021/08/dummy-user.png'
              alt='DummyImage'
            />
          </div>
          <div className='text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='right-corner'>
              <span>5:00 pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className='messageBubble own'>
        <div className='message'>
          <div className='text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='right-corner'>
              <span>5:00 pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
