const MessagesList = ({ messages }) => {

  return (
    <div className='messages-list-container'>
      {!messages
        ? <p className='messages-list__no-messages'>
          No messages
        </p>
        : <ul className='messages-list'>
            {messages.map(message => {
              const classes = `messages-list__message messages-list__message--${message.from}`;
              
              return (
                <li key={message.time} className='messages-list__item'>
                  <p className={classes}>
                    {message.text}
                  </p>
                  
                </li>
              )
            })}
          </ul>
      }
    </div>
  )
}

export default MessagesList;