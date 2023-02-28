const InputText = ({label, id, settings, setSettings}) => {

  const onChange = function(event) {
    const target = event.target;
    const newSettings = {...settings, [id]: target.value};
    setSettings(newSettings);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  }


  return (
    <div className='settings-form__input-container'>
      <label
        className='settings-form__label'
        htmlFor={id}
      >
        {label}
      </label>
      <input 
        className='settings-form__input'
        value={settings[id]}
        id={id} 
        type="text"
        onChange={onChange}
      />
    </div>
  )
}

export default InputText;