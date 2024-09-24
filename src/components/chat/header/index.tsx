const ChatHeader = () => {
  return (
    <header>
      <div className='info'>
        <img src='/assets/avatar.png' alt='ChatAvatar' />
        <div className='texts'>
          <p className='title'>Ammar</p>
          <p className='infoHelperText'>last seen: 03:00 pm</p>
        </div>
      </div>
      <div>
        <ul className='actionButtonsList'>
          <li>
            <button>
              <img className='icon' src='/assets/phone.png' alt='PhoneIcon' />
            </button>
          </li>
          <li>
            <button>
              <img className='icon' src='/assets/video.png' alt='VideoIcon' />
            </button>
          </li>
          <li>
            <button>
              <img className='icon' src='/assets/info.png' alt='InfoIcon' />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default ChatHeader;
