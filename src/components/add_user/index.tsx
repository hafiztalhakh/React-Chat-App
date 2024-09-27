const AddUser = () => {
  return (
    <div className='addUserPopup'>
      <h2>Add User</h2>
      <form>
        <input type='text' placeholder='Search' />
        <button type='button'>Search</button>
      </form>

      <div className='list'>
        <div className='listItem'>
          <div className='left'>
            <img src='/assets/avatar.png' alt='SearchedUserAvatar' />
            <p>Jane Doe</p>
          </div>
          <div className='right'>
            <button type='button'>Add</button>
          </div>
        </div>
        <div className='listItem'>
          <div className='left'>
            <img src='/assets/avatar.png' alt='SearchedUserAvatar' />
            <p>Jane Doe</p>
          </div>
          <div className='right'>
            <button type='button'>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
