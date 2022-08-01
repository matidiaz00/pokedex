import { setPromiseAllPokes, getPokeFilter } from './PokeAPI';
import { PokeColors } from './PokeColors';

const POKE_API_URL = 'https://pokeapi.co/api/v2';
const TRAINERS_API_URL = '/trainers.json';

export const getAllPokes = async () => {
    let pokes = []
    const localPokes0 = localStorage.getItem('poke0')
    const localPokes1 = localStorage.getItem('poke1')
    const localPokes2 = localStorage.getItem('poke2')
    const localPokes3 = localStorage.getItem('poke3')
    const localPokes4 = localStorage.getItem('poke4')
    if (localPokes0 && localPokes1 && localPokes2 && localPokes3 && localPokes4) {
        pokes = pokes.concat(localPokes0);
        pokes = pokes.concat(localPokes1);
        pokes = pokes.concat(localPokes2);
        pokes = pokes.concat(localPokes3);
        pokes = pokes.concat(localPokes4);
    } else {
        await setPromiseAllPokes()
        .then((data) => {
            /*
            localStorage.setItem('poke0', JSON.stringify(data[0]));
            localStorage.setItem('poke1', JSON.stringify(data[1]));
            localStorage.setItem('poke2', JSON.stringify(data[2]));
            localStorage.setItem('poke3', JSON.stringify(data[3]));
            localStorage.setItem('poke3', JSON.stringify(data[4]));
            */
            pokes = pokes.concat(data[0]);
            pokes = pokes.concat(data[1]);
            pokes = pokes.concat(data[2]);
            pokes = pokes.concat(data[3]);
            pokes = pokes.concat(data[4]);
        });
    }
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
    const res = await fetch(`${TRAINERS_API_URL}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
    });
    const trainers = await res.json();
    return trainers
}

export const pokeColors = PokeColors;