import loadCharacters from '../services/loadCharacters';
import filterCharacters from '../services/filterCharacters';

const SearchButton = ({settings, setSettings, setCharacters, setIsLoading, setNoResult, setIsCharactersEnded}) => {
  const disableSearch = (!settings.searchAgeFrom || !settings.searchAgeTo || !settings.searchSex);

  const onPointerDown = async function() {
    setSettings({...settings, isChanged: false});
    localStorage.setItem('settings', JSON.stringify({...settings, isChanged: false}));
    setIsLoading(true);
    setNoResult(false);
    setIsCharactersEnded(false);
    
    const characters = await loadCharacters();
    const filteredCharacters =  await filterCharacters(characters, settings);
    
    setCharacters(filteredCharacters);
    if (!filteredCharacters[0]) setNoResult(true);
    setIsLoading(false);
  }

  return (
    <div className='search__button-container'>
      <button
        className='search-button'
        onPointerDown={onPointerDown}
        disabled={disableSearch}
      >
        Search
      </button>
      {disableSearch && 
        <p className='search__disable-message'>
          Set search age and sex to search
        </p>}
    </div>
  )
}

export default SearchButton
