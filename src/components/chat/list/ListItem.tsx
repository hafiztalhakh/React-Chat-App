const ListItem = () => {
  return (
    <div className='chatItem'>
      <div className='avatar'>
        <img src='/assets/avatar.png' alt='userAvatar' />
      </div>
      <div className='details'>
        <p className='title'>Farrukh</p>
        <p className='lastMessage'>lorem ipsum lorem ipsum</p>
      </div>
    </div>
  );
};

export default ListItem;
