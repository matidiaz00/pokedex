const getFilter = (filter, type, typePlural, pokemon) => {
  const low = type.toLowerCase();
  if (
    filter !== '' &&
    filter !== type &&
    !pokemon[typePlural].some(e => e[low].name === filter)
  ) return true;
  else return false
}

const pokeFilter = async (pokemones, filters) => {
  return pokemones.filter((pokemon, index) => {
    let bool = true;
    if (filters.name !== '' && !pokemon.name.includes(filters.name)) bool = false;
    if (filters.ability !== '' && getFilter(filters.ability, 'Ability', 'abilities', pokemon)) bool = false;
    if (filters.move !== '' && getFilter(filters.move, 'Move', 'moves', pokemon)) bool = false;
    if (filters.type !== '' && getFilter(filters.type, 'Type', 'types', pokemon)) bool = false;
    return bool
  })
}

const pokeSort = async (pokemones, filters) => {
  return pokemones.sort((x, y) => {
    if (filters.order === 'alphabet') {
      const a = x.name.toUpperCase(),
      b = y.name.toUpperCase();
      return a === b ? 0 : a > b ? 1 : -1;
    } else if (filters.order === 'numeric') {
      return x.id > y.id ? 1 : -1;
    } else {
      return x.id > y.id ? 1 : -1;
    }
  });
}

const pokeOffset = async (allPokes, offset, howManyAdd) => {
  return allPokes
    .filter((pokemon, index) => 
      index >= offset && index < offset + howManyAdd
    )
}

export const setAllPokes = async (pokeContext, filters, offset, howManyAdd) => {
  let pokemons = pokeContext.pokes;
  pokemons = await pokeSort(pokemons, filters);
  pokemons = await pokeFilter(pokemons, filters);
  pokemons = await pokeOffset(pokemons, offset, howManyAdd);
  return pokemons
}

export const getClientHeight = async (id) => {
  return document && document.getElementById(id) ? document.getElementById(id).clientHeight : null;
}