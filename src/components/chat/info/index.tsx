const ChatInfo = () => {
  return (
    <>
      <header>
        <div className='avatar'>
          <img src='/assets/avatar.png' alt='ChatInfoUserAvatar' />
        </div>
        <h2>Ammar</h2>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </header>
      <div className='scrollable'>
        <div className='accordion'>
          <div className='accordionItem'>
            <h2>
              <button>
                <span>Chat Settings</span>
              </button>
            </h2>
          </div>
          <div className='accordionItem'>
            <h2>
              <button>
                <span>Privacy & help</span>
              </button>
            </h2>
          </div>
          <div className='accordionItem'>
            <h2>
              <button className='active'>
                <span>Shared Photos</span>
              </button>
            </h2>
            <div className='accordionBody'>
              <ul className='photosList'>
                <li>
                  <img
                    src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                    alt='photoImage'
                  />
                  <span>photo_2024_2.png</span>
                  <button className='iconButton'>
                    <img
                      className='icon'
                      src='/assets/download.png'
                      alt='DownloadIcon'
                    />
                  </button>
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                    alt='photoImage'
                  />
                  <span>photo_2024_2.png</span>
                  <button className='iconButton'>
                    <img
                      className='icon'
                      src='/assets/download.png'
                      alt='DownloadIcon'
                    />
                  </button>
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                    alt='photoImage'
                  />
                  <span>photo_2024_2.png</span>
                  <button className='iconButton'>
                    <img
                      className='icon'
                      src='/assets/download.png'
                      alt='DownloadIcon'
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className='accordionItem'>
            <h2>
              <button>
                <span>Shared Files</span>
              </button>
            </h2>
          </div>
        </div>
        <div className='buttonsContainer'>
          <button className='blockBtn'>Block</button>
          <button className='logoutBtn'>Logout</button>
        </div>
      </div>
    </>
  );
};

export default ChatInfo;
