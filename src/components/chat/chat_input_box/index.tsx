import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useState } from 'react';

const ChatInputBox = () => {
  const [value, setValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleEmojiClick = (data: EmojiClickData) => {
    setValue((prev) => prev + data.emoji);
    setShowPicker(false);
  };

  const toggle = () => {
    setShowPicker((prev) => !prev);
  };

  return (
    <div className='chatInputBox'>
      <ul className='actionButtonsList'>
        <li>
          <button>
            <img className='icon' src='/assets/img.png' alt='UpdalodIcon' />
          </button>
        </li>
        <li>
          <button>
            <img className='icon' src='/assets/camera.png' alt='CameraIcon' />
          </button>
        </li>
        <li>
          <button>
            <img className='icon' src='/assets/mic.png' alt='MicIcon' />
          </button>
        </li>
      </ul>
      <div className='messageBox'>
        <input
          type='text'
          placeholder='Type your message here..'
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className='emojiButton'>
        <button className='iconButton' onClick={toggle}>
          <img className='icon' src='/assets/emoji.png' alt='EmojiIcon' />
        </button>
        {showPicker && (
          <div className='emojiPicker'>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
      <div className='sendButton'>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatInputBox;
