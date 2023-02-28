import PagesLinksList from '../components/PagesLinksList';
import DialoguesList from '../components/DialoguesList';

const Chat = ({ matches, allMessages }) => {
  return (
    <section className='chat'>
      <h2 className='visually-hidden'>Chat</h2>
      <DialoguesList 
        matches={matches} 
        allMessages={allMessages}
      />
      <PagesLinksList active='chat'/>
    </section>
  )
}

export default Chat
