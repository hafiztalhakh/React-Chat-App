import React from 'react';

const UserInfo = () => {
  return (
    <div className='userInfo'>
      <div className='user'>
        <img src='/assets/avatar.png' alt='userAvatar' />
        <h2>john Doe</h2>
      </div>
      <div className='icons'>
        <img src='/assets/more.png' alt='more' />
        <img src='/assets/video.png' alt='video' />
        <img src='/assets/edit.png' alt='edit' />
      </div>
    </div>
  );
};

export default UserInfo;
