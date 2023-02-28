import CharacterImageMask from './CharacterImageMask';

const Character = ({character, setIsCharacterLoading, isCharacterLoading}) => {
  const {name, age, imageLarge, description} = character;
  const handledAge = (typeof age == 'object') 
                      ? `from ${age.ageFrom} to ${age.ageTo}` 
                      : age
  ;
  const onImageLoaded = () => setIsCharacterLoading(false);

  return (
    <article className='character'>
      <div className='charactre__image-container'>
        {isCharacterLoading && <CharacterImageMask/>}
        <img 
          className='character__image' 
          src={imageLarge} 
          alt={name}
          onLoad={onImageLoaded}
        />
      </div>
      <h3 className='character__name'>{name}</h3>
      <span className='character__age'>Age: {handledAge}</span>
      <p className='character__about'>{description}</p>
    </article>
  )
}

export default Character;
