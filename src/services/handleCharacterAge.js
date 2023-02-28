const handleCharacterAge = function (characterAge) {
  const age = characterAge.trim();
  const isSpace = age.includes(' ');
  const isComma = age.includes(',');
  const isDash = age.includes('-');

  const handleDash = function (age) {
    const ages = age.split('-');
    if (!ages[1]) return ages[0];
    else return {ageFrom: ages[0], ageTo: ages[1]};
  }

  const handleSymbol = function(symbol) {
    const firstAge = age.split(symbol)[0];
    if (firstAge.includes('-')) return handleDash(firstAge);
    else return firstAge;
  }

  if (!isSpace && !isComma && !isDash) return age;
  if (!isSpace && !isComma && isDash) return handleDash(age);
  if (isSpace && !isComma) return handleSymbol(' ');
  if (!isSpace && isComma) return handleSymbol(',')
  if (isSpace && isComma) {
    const spaceIndex = age.indexOf(' ');
    const commaIndex = age.indexOf(',');
    const symbol = spaceIndex < commaIndex ? ' ' : ',';
    
    return handleSymbol(symbol);
  }  
}

export default handleCharacterAge;

