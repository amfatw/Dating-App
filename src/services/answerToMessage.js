import getRandomInteger from './getRandomInt';

const answerToMessage = function(message) {
  const text = message.trim();
  const lastIndex = (text.length - 1);
  const isQuestion = text[lastIndex] == '?';

  if (isQuestion) {
    const answerNumber = getRandomInteger(1, 4);

    switch (answerNumber) {
      case 1:
        return 'Yes';

      case 2:
        return 'No';

      case 3:
        return 'I don\'t know';

      case 4:
        return 'Google it';
    }
  }

  if (!isQuestion) {
    const answerNumber = getRandomInteger(1, 4);

    switch (answerNumber) {
      case 1:
        return 'Wow';

      case 2:
        return 'Very interesting';

      case 3:
        return 'Tell me more about it';

      case 4:
        return 'Let\'s talk about something else';
    }
  }
}

export default answerToMessage;