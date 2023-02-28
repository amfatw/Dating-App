import handleCharacterAge from './handleCharacterAge';

const filterCharacters = async function (characters, settings) {
  const {searchSex, searchAgeFrom, searchAgeTo} = settings;
  
  const firstFilteredCharacters = characters.filter(char => char.gender == searchSex && char.age);

  const refactoredCharacters = firstFilteredCharacters.map(char => {
    return {...char, 
            name: char.name.full,
            imageLarge: char.image.large,
            imageSmall: char.image.medium,
            age: handleCharacterAge(char.age)
           }
  });

  const secondFilteredCharacters = refactoredCharacters.filter(char => {
    const type = typeof char.age;
    
    switch (type) {
      case 'string':
        const age = parseInt(char.age);
        
        if (age <= searchAgeTo 
          && 
          age >= searchAgeFrom) {
            return true
          };
          break;

          
      case 'object':
        const ageFrom = parseInt(char.age.ageFrom);
        const ageTo = parseInt(char.age.ageTo);

        if (ageFrom <= searchAgeTo
          &&
          ageTo >= searchAgeFrom) {
            return true
          };
          break;
    }
  })

  return secondFilteredCharacters;
}

export default filterCharacters;