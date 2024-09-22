import Chat from './components/chat';
import ChatInfo from './components/chat_info';
import List from './components/list';

function App() {
  return (
    <div className='container'>
      <List />
      <Chat />
      <ChatInfo />
    </div>
  );
}

export default App;
