import './App.css';
import Header from './components/header';
import Search from './components/search';
import ChatList from './components/chat/list';
import ChatHeader from './components/chat/header';
import ChatInputBox from './components/chat/chat_input_box';
import ChatBox from './components/chat/chat_box';

function App() {
  return (
    <div className='container'>
      <div className='leftSidePanel'>
        <Header />
        <Search />
        <ChatList />
      </div>
      <div className='chatContainer'>
        <ChatHeader />
        <ChatBox />
        <ChatInputBox />
      </div>
      <div className='chatInfoContainer'>
        <header>
          <div className='avatar'>
            <img src='/assets/avatar.png' alt='ChatInfoUserAvatar' />
          </div>
          <h2>Ammar</h2>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </header>
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
              </ul>
              {/* <div className='photos'>
                <div className='photoItem'>
                  <div className='photoDetails'>
                    <img
                      src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                      alt='photoImage'
                    />
                    <span>photo_2024_2.png</span>
                  </div>
                  <button className='IconButton'>
                    <img
                      className='icon'
                      src='/assets/download.png'
                      alt='DownloadIcon'
                    />
                  </button>
                </div>
              </div> */}
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
      </div>
    </div>
  );
}

export default App;
