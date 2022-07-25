const POKE_API_URL = 'https://pokeapi.co/api/v2';
const TRAINERS_API_URL = './trainers.json';

export const getPokemon = async (url) => {
    const res = await fetch(url);
    const pokemon = await res.json();
    return pokemon
}

export const getPokeFilter = async (filter) => {
    const res = await fetch(`${POKE_API_URL}/${filter}`);
    const pokeFilter = await res.json();
    return pokeFilter.results;
}

export const getPokeFilterName = async () => {
    const res = await fetch(`${POKE_API_URL}/pokemon/?limit=2000`);
    const pokeFilter = await res.json();
    return pokeFilter.results;
}

export const getAllPokemons = async (offset = 10) => {
    const arrPokes = [];
    const response = await fetch(`${POKE_API_URL}/pokemon/?limit=10&offset=${offset}`);
    const data = await response.json();
    for (const pokemon of data.results) {
        arrPokes.push(getPokemon(pokemon.url));
    }
    const results = await Promise.all(arrPokes)
    return results;
};

export const getPokeData = async () => {
    const results = await Promise.all([
        getPokeFilterName('name'),
        getPokeFilter('type'),
        getPokeFilter('ability'),
        getPokeFilter('move')
    ])
    return results
}

export const getAllTrainers = async () => {
    const res = await fetch(`${TRAINERS_API_URL}`);
    const trainers = await res.json();
    return trainers
}