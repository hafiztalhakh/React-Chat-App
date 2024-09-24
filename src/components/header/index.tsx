import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='user'>
        <img className='userAvatar' src='/assets/avatar.png' alt='AuthUserDp' />
        <h2>Talha Khalid</h2>
      </div>
      <ul className='actionButtonsList'>
        <li>
          <button type='button'>
            <img className='icon' src='/assets/more.png' alt='MoreIcon' />
          </button>
        </li>
        <li>
          <button type='button'>
            <img className='icon' src='/assets/video.png' alt='VideoIcon' />
          </button>
        </li>
        <li>
          <button type='button'>
            <img className='icon' src='/assets/edit.png' alt='EditIcon' />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
