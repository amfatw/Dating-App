import InputNumber from './InputNumber';
import InputRadioGroup from './InputRadioGroup';
import InputText from './InputText';
import InputTextarea from './InputTextarea';


const SettingsForm = ({ settings, setSettings, initialSettings }) => {
  const handleButton = function() {
    setSettings({...initialSettings, isChanged: true});
    localStorage.clear();
  }

  return (
    <form className='settings-form'>
      <fieldset className='settings-form__fieldset'>
        <legend className='settings-form__legend'>About you</legend>
        <InputText
          label='Your name:'
          id='yourName'
          settings={settings}
          setSettings={setSettings}
        />
        <InputNumber
          label='Your age:'
          id='yourAge'
          settings={settings}
          setSettings={setSettings}
        />
        <InputRadioGroup
          text='Your sex:'
          id='yourSex'
          options={['Male', 'Female']}
          settings={settings}
          setSettings={setSettings}
        />
        <InputTextarea
          label='About you:'
          id='aboutYou'
          settings={settings}
          setSettings={setSettings}
        />
      </fieldset>
      <fieldset className='settings-form__fieldset'>
        <legend className='settings-form__legend'>Who are you looking for</legend>
        <div className='settings-form__input-container'>
          <p>Age:</p>
          <InputNumber
            label='from'
            id='searchAgeFrom'
            settings={settings}
            setSettings={setSettings}
          />
          <InputNumber
            label='to'
            id='searchAgeTo'
            settings={settings}
            setSettings={setSettings}
          />
        </div>
        <InputRadioGroup
          text='Sex:'
          id='searchSex'
          options={['Male', 'Female']}
          settings={settings}
          setSettings={setSettings}
        />
      </fieldset>
      <button
        className='settings__reset-button'
        type='button'
        onPointerDown={handleButton}
      >
        Reset
      </button>
    </form>
  )
}

export default SettingsForm
