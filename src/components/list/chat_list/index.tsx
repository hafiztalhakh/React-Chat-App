import React, { useState } from 'react';

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  const toggleMode = () => {
    setAddMode((prevMode) => !prevMode);
  };

  return (
    <div className='chatList'>
      <div className='search'>
        <div className='searchBar'>
          <img src='/assets/search.png' alt='search-icon' />
          <input type='text' placeholder='Search' />
        </div>
        <img
          className='add-user'
          src={addMode ? '/assets/minus.png' : '/assets/plus.png'}
          alt='plus-icon'
          onClick={toggleMode}
        />
      </div>
      <div className='item'>
        <img src='/assets/avatar.png' alt='avatar' />
        <div className='texts'>
          <span>John Doe</span>
          <p>lorem ipsum dolor smit</p>
        </div>
      </div>
      <div className='item'>
        <img src='/assets/avatar.png' alt='avatar' />
        <div className='texts'>
          <span>John Doe</span>
          <p>lorem ipsum dolor smit</p>
        </div>
      </div>
      <div className='item'>
        <img src='/assets/avatar.png' alt='avatar' />
        <div className='texts'>
          <span>John Doe</span>
          <p>lorem ipsum dolor smit</p>
        </div>
      </div>
      <div className='item'>
        <img src='/assets/avatar.png' alt='avatar' />
        <div className='texts'>
          <span>John Doe</span>
          <p>lorem ipsum dolor smit</p>
        </div>
      </div>
      <div className='item'>
        <img src='/assets/avatar.png' alt='avatar' />
        <div className='texts'>
          <span>John Doe</span>
          <p>lorem ipsum dolor smit</p>
        </div>
      </div>
      <div className='item'>
        <img src='/assets/avatar.png' alt='avatar' />
        <div className='texts'>
          <span>John Doe</span>
          <p>lorem ipsum dolor smit</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
