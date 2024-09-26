import './App.css';
import Login from './components/login';
// import Header from './components/header';
// import Search from './components/search';
// import ChatList from './components/chat/list';
// import ChatHeader from './components/chat/header';
// import ChatInputBox from './components/chat/chat_input_box';
// import ChatBox from './components/chat/chat_box';
// import ChatInfo from './components/chat/info';

function App() {
  return (
    <div className='loginContainer'>
      <Login />
      {/* <div className='leftSidePanel'>
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
        <ChatInfo />
      </div> */}
    </div>
  );
}

export default App;
