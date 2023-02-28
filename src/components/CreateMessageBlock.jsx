import { useState } from 'react';
import answerToMessage from '../services/answerToMessage';

const CreateMessageBlock = ({ characterId, allMessages, setAllMessages }) => {
  const [text, setText] = useState('');

  const onChange = function(event) {
    const value = event.target.value;
    setText(value);
  }

  const onKeyDown = function(event) {
    if (event.code == 'Enter') {
      event.preventDefault();
      handleButton();
    }
  }

  const handleButton = function() {
    const newMessage = {text: text, from: 'you', time: Date.now()};
    const currentMessages = allMessages[characterId] 
                            ? allMessages[characterId] 
                            : [];

    setAllMessages({...allMessages, [characterId]: [...currentMessages, newMessage]});

    setTimeout(() => {
      const answer = {text: answerToMessage(text), from: 'interlocutor', time: Date.now()};
      const currentMessages = allMessages[characterId] 
                            ? allMessages[characterId] 
                            : [];
      // setAllMessages({...allMessages, [characterId]: [...currentMessages, answer]});
      setAllMessages((allMessages) =>  {
        return {...allMessages, [characterId]: [...allMessages[characterId], answer]}
      });
    }, 1000);

    setText('');
  }

  return (
    <div className='create-message'>
      <textarea
        className='create-message__textarea' 
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button
        className='create-message__button'
        onPointerDown={handleButton}
      >
        <span>Send</span>
      </button>
    </div>
  )
}

export default CreateMessageBlock;