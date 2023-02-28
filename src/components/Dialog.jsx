const Dialog = ({ character, lastMessage }) => {
  const {imageSmall, name} = character;

  return (
    <>
      <img 
        className='chat__dialogue-image'
        src={imageSmall} 
        alt="character image" 
      />
      <div>
        <h3 className='chat__dialogue-name'>{name}</h3>
        <p className='chat__dialogue-message'>
          {lastMessage 
            ? `${lastMessage.from}: ${lastMessage.text}` 
            : `No messages yet`
          }
        </p>
      </div>
    </>
  )
}

export default Dialog
