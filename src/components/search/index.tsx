const Search = () => {
  return (
    <div className='searchContainer'>
      <div className='searchBox'>
        <img src='/assets/search.png' alt='SearchIcon' />
        <input type='text' placeholder='Seach' />
      </div>
      <div className='buttonContainer'>
        <button type='button'>
          <img src='/assets/plus.png' alt='PlusIcon' />
        </button>
      </div>
    </div>
  );
};

export default Search;
