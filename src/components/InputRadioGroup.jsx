const InputRadioGroup = ({ text, id, options, settings, setSettings }) => {

  const onChange = function(event) {
    const target = event.target;
    const newSettings = {...settings, [id]: target.value, isChanged: true};
    setSettings(newSettings);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  }


  return (
    <div className='settings-form__input-container'>
      <p className='settings-form__label'>{text}</p>
      <ul className='setting-form__radio-list'>
        {options.map( (option)=> {
          const inputId = id + option;
          const checked = settings[id] === option;

          return (
            <li
              className='settings-form__radio-container' 
              key={inputId}
            >
              <label 
                className='settings-form__label'
                htmlFor="inputId"
              >
                {option}
              </label>
              <input
                className='settings-form__input'
                id={inputId} 
                name={id} 
                value={option}
                type="radio"
                onChange={onChange}
                checked={checked}
                />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default InputRadioGroup;