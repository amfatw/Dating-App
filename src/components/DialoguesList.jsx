import { Link } from 'wouter';

import Dialog from './Dialog';

const DialoguesList = ({ matches, allMessages }) => {
  return (
    <div className='dialogues-container'>
      {!matches[0]
        ? <p className='chat__message'>No matches yet</p>
        : <ul className='chat__dialogues-list'>
            {matches.map(char => {
              const address = `/chat/${char.id}`;
              const charMessages = allMessages[char.id];
              let lastMessage = null;

              if (charMessages) {
                const lastIndex = (charMessages.length - 1);
                lastMessage = charMessages[lastIndex];
              }
              

              return (
                <li 
                  key={char.id}
                  className='chat_dialogue-item'
                >
                  <Link href={address}>
                    <a className='chat_dialogue-link'>
                      <Dialog character={char} lastMessage={lastMessage}/>
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
      }
      
    </div>
  )
}

export default DialoguesList
