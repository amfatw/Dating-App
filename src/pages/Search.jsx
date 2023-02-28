import { useState } from 'react';
import PagesLinksList from '../components/PagesLinksList';
import RateCharactersBlock from '../components/RateCharactersBlock';
import SearchBlock from '../components/SearchBlock';

const Search = ({settings, setSettings, characters, setCharacters, matches, setMatches}) => {
  const [isCharactersEnded, setIsCharactersEnded] = useState(false);
  const character = characters[0];

  return (
    <section className='search'>
      <h2 className='visually-hidden'>Search</h2>

      {character && !settings.isChanged
        ? <RateCharactersBlock
            characters={characters}
            setCharacters={setCharacters}
            matches={matches} 
            setMatches={setMatches}
            setIsCharactersEnded={setIsCharactersEnded}
          />
        : <SearchBlock
            settings={settings}
            setSettings={setSettings}
            setCharacters={setCharacters}
            isCharactersEnded={isCharactersEnded}
            setIsCharactersEnded={setIsCharactersEnded}
          />
      }

      <PagesLinksList active='search'/>
    </section>
  )
}

export default Search;