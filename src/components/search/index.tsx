import { useState } from 'react';
import AddUser from '../add_user';

const Search = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className='searchContainer'>
      <div className='searchBox'>
        <img src='/assets/search.png' alt='SearchIcon' />
        <input type='text' placeholder='Seach' />
      </div>
      <div className='buttonContainer'>
        <button className='iconButton' type='button' onClick={toggleOpen}>
          <img
            src={open ? '/assets/minus.png' : '/assets/plus.png'}
            alt='PlusIcon'
          />
        </button>
      </div>
      {open && <AddUser />}
    </div>
  );
};

export default Search;
