import SearchButton from './SearchButton';
import Loader from './Loader';
import { useState } from 'react';


const SearchBlock = ({ settings, setSettings, setCharacters, isCharactersEnded, setIsCharactersEnded }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  let message = 'Nobody is here yet. Start a search:';

  if (noResult) message = 'No results. Chenge search parameters or try once more:';
  if (isCharactersEnded) message = 'The list is over. Load a new one or change search parameters:'
  if (settings.isChanged) message = 'Search parameters have changed. Start a new search:';

  return (
    <div className='search-container'>
      {isLoading
        ? <Loader/>
        : <div className='search__search-block'>
            <p className='search__message'>{message}</p>
            <SearchButton 
              settings={settings}
              setSettings={setSettings}
              setCharacters={setCharacters}
              setIsLoading={setIsLoading}
              setNoResult={setNoResult}
              setIsCharactersEnded={setIsCharactersEnded}
            />
          </div>
      }
    </div>
    
  )
}

export default SearchBlock;