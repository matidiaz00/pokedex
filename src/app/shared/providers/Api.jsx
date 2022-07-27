import { getPromiseAllPokes, getPokeFilter } from './PokeAPI';
import { PokeColors } from './PokeColors';

const POKE_API_URL = 'https://pokeapi.co/api/v2';
const TRAINERS_API_URL = './trainers.json';

export const getAllPokes = async () => {
    let pokes = []
    await getPromiseAllPokes()
      .then((data) => {
        pokes = pokes.concat(data[0]);
        pokes = pokes.concat(data[1]);
        pokes = pokes.concat(data[2]);
      });
    return pokes
}

export const getPokesNames = async () => {
    const res = await fetch(`${POKE_API_URL}/pokemon/?limit=10000&offset=0`);
    const pokesNames = await res.json();
    return pokesNames.results;
}

export const getPokeProviders = async () => {
    const results = await Promise.all([
        getPokesNames(),
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

export const pokeColors = PokeColors;