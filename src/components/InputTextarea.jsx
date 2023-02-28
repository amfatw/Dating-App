const InputTextarea = ({label, id, settings, setSettings}) => {

  const onChange = function(event) {
    const target = event.target;
    const newSettings = {...settings, [id]: target.value};
    setSettings(newSettings);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  }


  return (
    <div className='settings-form__textarea-container'>
      <label 
        className='settings-form__label'
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className='settings-form__input'
        value={settings[id]}
        id={id} 
        onChange={onChange}
      />
    </div>
  )
}

export default InputTextarea;