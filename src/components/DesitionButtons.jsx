const DesitionButtons = ({character, characters, setCharacters, matches, setMatches, setIsCharacterLoading, setIsCharactersEnded}) => {

  const onPointerDown = function (event) {
    const value = event.target.value;

    if (value == 'yes') setMatches([...matches, character]);

    const newArr = [...characters];
    newArr.shift();
    setCharacters(newArr);
    if (!newArr[0]) setIsCharactersEnded(true);
    setIsCharacterLoading(true);
  }

  return (
    <ul className='desition-buttons'>
      <li>
        <button 
          className='desition-buttons__button desition-buttons__button--no' 
          value='no'
          onPointerDown={onPointerDown}
        >
          no
        </button>
      </li>
      
      <li>
        <button 
          className='desition-buttons__button desition-buttons__button--yes' 
          value='yes'
          onPointerDown={onPointerDown}
        >
          yes
        </button>
      </li>
    </ul>
  )
}

export default DesitionButtons;
