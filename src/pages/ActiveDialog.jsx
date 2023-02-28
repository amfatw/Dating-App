import { Link } from 'wouter';

import MessagesList from '../components/MessagesList';
import CreateMessageBlock from '../components/CreateMessageBlock';

const ActiveDialog = ({ params, matches, allMessages, setAllMessages }) => {
  const charId = params.id;
  const character = matches.find(item => item.id == charId);
  const handledAge = (typeof character.age == 'object') 
                      ? `from ${character.age.ageFrom} to ${character.age.ageTo}` 
                      : character.age;


  const messages = allMessages[character.id];



  return (
    <section className='active-dialogue'>
      <h2 className='visually-hidden'>
        Dialogue with {character.name}
      </h2>
      <div className='active-dialogue__header'>
        <Link href='/chat'>
          <a className='active-dialogue__back'>
            <p className='visually-hidden1'>back</p>
          </a>
        </Link>
        <div className='active-dialogue__character-info'>
          <div className='active-dialogue__character-container'>
            <h3>{character.name}</h3>
            <span>age: {handledAge}</span>
          </div>
          <img
            className='active-dialogue__character-image'
            src={character.imageSmall} 
            alt={character.name} 
          />
        </div>
      </div>
      <MessagesList 
        messages={messages}
      />
      <CreateMessageBlock
        characterId={character.id}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
    </section>
  )
}

export default ActiveDialog
