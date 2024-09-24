import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='user'>
        <img className='userAvatar' src='/assets/avatar.png' alt='AuthUserDp' />
        <h2>Talha Khalid</h2>
      </div>
      <nav className='actions'>
        <ul>
          <li>
            <img src='/assets/more.png' alt='MoreIcon' />
          </li>
          <li>
            <img src='/assets/video.png' alt='MoreIcon' />
          </li>
          <li>
            <img src='/assets/edit.png' alt='MoreIcon' />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
