import './App.css';
import ChatList from './components/chat/list';
import Header from './components/header';
import Search from './components/search';

function App() {
  return (
    <div className='container'>
      <div className='leftSidePanel'>
        <Header />
        <Search />
        <ChatList />
      </div>
      <div className='chatContainer'>Chat Container</div>
      <div className='chatInfoContainer'>Chat Info Container</div>
    </div>
  );
}

export default App;
