const POKE_API_URL = 'https://pokeapi.co/api/v2';

const getPokesBasicData = async () => {
	const res = await fetch(`${POKE_API_URL}/pokemon/?limit=10000&offset=0`);
	const pokesBasicData = await res.json();
	return pokesBasicData;
}

const getPokemon = async (url) => {
  const res = await fetch(url);
  const pokemon = await res.json();
  return pokemon
}

const setPromisePokes = async (data) => {
  const arrPokes = [];
  for (let i = 0; i < data.length; i++) {
    arrPokes.push(getPokemon(data[i].url))
  }
  const results = await Promise.all(arrPokes)
  return results;
}

const setSearches = (data, length) => {
  return {
    firstSearch: data.filter((item, i) => i <= 500),
    secondSearch: data.filter((item, i) => i > 500 && i <= 1000),
    thirdSearch: data.filter((item, i) => i > 1000 && i < length)
  }
}

export const getPokeFilter = async (filter) => {
	const res = await fetch(`${POKE_API_URL}/${filter}`);
	const pokeFilter = await res.json();
	return pokeFilter.results;
}

export const getPromiseAllPokes = async () => {
  let results = null;
  await getPokesBasicData()
    .then(async (basicData) => {
      const searches = setSearches(basicData.results, basicData.count);
      results = await Promise.all([
        await setPromisePokes(searches.firstSearch),
        await setPromisePokes(searches.secondSearch),
        await setPromisePokes(searches.thirdSearch)
      ])
    })
  return results;
}