const InputNumber = ({ label, id, settings, setSettings }) => {

  const onChange = function(event) {
    const target = event.target;
    const newSettings = {...settings, [id]: target.value, isChanged: true};
    setSettings(newSettings);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  }


  return (
    <div className='settings-form__age-container'>
      <label 
        className='settings-form__label'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className='settings-form__input settings-form__input--number'
        value={settings[id]}
        id={id} 
        type="number"
        onChange={onChange}
      />
    </div>
  )
}

export default InputNumber;