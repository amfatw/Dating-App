import { useState } from 'react';

import Character from './Character';
import DesitionButtons from './DesitionButtons';

const RateCharactersBlock = ({ characters, setCharacters, matches, setMatches, setIsCharactersEnded}) => {
  const [isCharacterLoading, setIsCharacterLoading] = useState(false);
  const character = characters[0];

  return (
    <div className='search-container'>
      <Character 
        character={character} 
        setIsCharacterLoading={setIsCharacterLoading}
        isCharacterLoading={isCharacterLoading}
      />
      <DesitionButtons 
        character={character} 
        characters={characters} 
        setCharacters={setCharacters} 
        matches={matches} 
        setMatches={setMatches}
        setIsCharacterLoading={setIsCharacterLoading}
        setIsCharactersEnded={setIsCharactersEnded}
      />
    </div>
  )
}

export default RateCharactersBlock
