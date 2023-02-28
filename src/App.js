import { useState } from 'react';
import { Route, Switch } from "wouter";

import Search from './pages/Search';
import Settings from './pages/Settings';
import Chat from './pages/Chat';
import ActiveDialog from './pages/ActiveDialog';


function App() {
  const initialSettings = {
    isChanged: false,
    yourName: '',
    yourAge: '',
    yourSex: '',
    aboutYou: '',
    searchSex: '',
    searchAgeFrom: '',
    searchAgeTo: '',
  }

  const [settings, setSettings] = useState(
    localStorage.getItem('settings')
      ? JSON.parse(localStorage.getItem('settings'))
      : initialSettings
  );

  const [characters, setCharacters] = useState([]);
  const [matches, setMatches] = useState([]);
  const [allMessages, setAllMessages] = useState({});
  

  return (
    <>
      <Switch>
        <Route path="/chat">
          <Chat 
            matches={matches}
            allMessages={allMessages}
          />
        </Route>

        <Route path="/search">
          <Search 
            settings={settings}
            setSettings={setSettings}
            characters={characters}
            setCharacters={setCharacters}
            matches={matches}
            setMatches={setMatches}
          />
        </Route>

        <Route path="/settings">
          <Settings 
            settings={settings} 
            setSettings={setSettings}
            initialSettings={initialSettings}
          />
        </Route>

        <Route path="/chat/:id">
          {(params) => {
            return (
              <ActiveDialog 
                params={params}
                matches={matches}
                allMessages={allMessages}
                setAllMessages={setAllMessages}
              />
            )}}
        </Route>;

        <Route>
          <Search 
            settings={settings}
            setSettings={setSettings}
            characters={characters}
            setCharacters={setCharacters}
            matches={matches}
            setMatches={setMatches}
          />
        </Route>
      </Switch>
    </>
  )
}

export default App;