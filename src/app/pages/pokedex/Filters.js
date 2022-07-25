const removeDuplicates = (arr) => {
    return arr.reduce((acc, current) => {
        const x = acc.find(item => item.id === current.id);
        return !x ? acc.concat([current]) : acc;
    }, []);
}

export const pokeFilter = (pokes, filters) => {
    pokes = pokes.filter((pokemon, index) => {
        let bool = true;
        if (filters.name !== '' && !pokemon.name.includes(filters.name)) bool = false;
        if (filters.ability !== '' && filters.ability !== 'Ability' && !pokemon.abilities.some(e => e.ability.name === filters.ability)) bool = false;
        if (filters.move !== '' && filters.move !== 'Move' && !pokemon.moves.some(e => e.move.name === filters.move)) bool = false;
        if (filters.type !== '' && filters.type !== 'Type' && !pokemon.types.some(e => e.type.name === filters.type)) bool = false;
        return bool
    });
    return removeDuplicates(pokes);
}