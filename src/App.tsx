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
      <div className='chatInfoContainer'>Chat Info Container</div>
    </div>
  );
}

export default App;
