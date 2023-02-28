import getRandomInteger from './getRandomInt';

const loadCharacters = async function() {
  const lastCharactersPage = 2613;
  const url = 'https://graphql.anilist.co';

  const query = `
  query getCharacters {
    page1: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page2: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page3: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page4: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page5: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page6: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page7: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page8: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page9: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
    page10: Page (page: ${getRandomInteger(1, lastCharactersPage)}, perPage: 50) {
      characters{
        id
        name {
          full
        }
        image {
          large
        }
        image {
          medium
        }
        description
        gender
        age
      }
    }
  }
  `;
  
  const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query: query
          })
  };

  const response = await fetch(url, options);
  if (!response.ok) return alert(response.status);
  const json = await response.json();
  const data = json.data;

  let characters = [];

  for (let page in data) {
    characters = [...characters, ...data[page].characters]
  };

  return characters;
}

export default loadCharacters;