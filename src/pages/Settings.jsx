import PagesLinksList from '../components/PagesLinksList';
import SettingsForm from '../components/SettingsForm';

const Settings = ({ settings, setSettings, initialSettings }) => {
  return (
    <section className='settings'>
      <h2 className='visually-hidden'>Settings</h2>
      <SettingsForm 
        settings={settings}
        setSettings={setSettings}
        initialSettings={initialSettings}
      />
      <PagesLinksList active='settings'/>
    </section>
  )
}

export default Settings
