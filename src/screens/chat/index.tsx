import Header from '../../components/header';
import Search from '../../components/search';
import ChatList from '../../components/chat/list';
import ChatBox from '../../components/chat/chat_box';
import ChatHeader from '../../components/chat/header';
import ChatInputBox from '../../components/chat/chat_input_box';
import ChatInfo from '../../components/chat/info';

const Chat = () => {
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
        <ChatInfo />
      </div>
    </div>
  );
};

export default Chat;
