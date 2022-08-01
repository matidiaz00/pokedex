import React, { useState, useEffect, useContext } from 'react';
import { pokeColors } from '../shared/providers/Api';
import { PokeContext } from '../PokedexContext';
import Item from './components/pokedex/Item';
import Filters from './components/pokedex/Filters';
import Details from './components/pokedex/Details';
import EmptySelectPoke from './components/pokedex/EmptySelectPoke';
import Empty from './components/pokedex/Empty';

function Pokedex() {

  const howManyAdd = 10;

  const pokeContext = useContext(PokeContext);

  const [isFixed, setIsFixed] = useState(false);
  const [pokes, setPokes] = useState([]);
  const [selectPoke, setSelectPoke] = useState(null);
  const [offset, setOffset] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [pokeFilters, setPokeFilters] = useState({
    name: '',
    order: 'Sort',
    type: 'Type',
    ability: 'Ability',
    move: 'Move'
  });

  const setFilter = (filter, type, typePlural, pokemon) => {
    const low = type.toLowerCase();
    if (
      filter !== '' &&
      filter !== type &&
      !pokemon[typePlural].some(e => e[low].name === filter)
    ) return true;
    else return false
  }

  const pokeFilter = async (pokemones) => {
    return pokemones.filter((pokemon, index) => {
      let bool = true;
      if (pokeFilters.name !== '' && !pokemon.name.includes(pokeFilters.name)) bool = false;
      if (pokeFilters.ability !== '' && setFilter(pokeFilters.ability, 'Ability', 'abilities', pokemon)) bool = false;
      if (pokeFilters.move !== '' && setFilter(pokeFilters.move, 'Move', 'moves', pokemon)) bool = false;
      if (pokeFilters.type !== '' && setFilter(pokeFilters.type, 'Type', 'types', pokemon)) bool = false;
      return bool
    })
  }

  const pokeSort = async (pokemones) => {
    return pokemones.sort((x, y) => {
      if (pokeFilters.order === 'alphabet') {
        const a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
        return a === b ? 0 : a > b ? 1 : -1;
      } else if (pokeFilters.order === 'numeric') {
        return x.id > y.id ? 1 : -1;
      } else {
        return x.id > y.id ? 1 : -1;
      }
    });
  }

  const pokeOffset = async (allPokes) => {
    return allPokes
      .filter((pokemon, index) => 
        index >= offset && index < offset + howManyAdd
      )
  }

  const handleScroll = (e) => {
    const windowHeight = window.innerHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeight = e.target.documentElement.scrollHeight;
    const headerHeight = document.getElementById('Header').clientHeight;
    const filtersHeight = document.getElementById('Filters').clientHeight;
    if (windowHeight + scrollTop + 1 >= scrollHeight || isScroll) setIsScroll(true);
    if (scrollTop + 1 >= headerHeight + filtersHeight) setIsFixed(true);
    else setIsFixed(false);
  }

  const setAllPokes = async () => {
    let pokemons = pokeContext.pokes;
    pokemons = await pokeSort(pokemons);
    pokemons = await pokeFilter(pokemons);
    pokemons = await pokeOffset(pokemons);
    setPokes((oldPokes) => [...oldPokes, ...pokemons]);
    setOffset(offset + howManyAdd);
  }

  const getMorePokes = () => {
		setAllPokes();
		setIsScroll(false);
	};

  const getDetail = (id) => {
    pokeContext.pokes.filter(x => x.id === id).map(x => setSelectPoke(x))
  }

  const callback = (data) => {
    setOffset(() => 0);
    setPokes(() => []);
    setPokeFilters({
      name: data.name,
      order: data.order,
      type: data.type,
      ability: data.ability,
      move: data.move
    })
  };

  useEffect(() => {
		if (!isScroll) return;
		getMorePokes();
	}, [isScroll]);

  useEffect(() => {
    setAllPokes();
  }, [pokeFilters]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Pokedex">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-8 position-relative'>
            <div
              id="Filters"
              className={`w-100 py-2 ${isFixed ? 'bg-white position-sticky top-0' : ''}`}
              style={{zIndex: 2}}
            >
              <Filters defaultData={pokeFilters} change={callback} />
            </div>
              <div className='row m-n3'>
                {
                  pokes.length === 0 ? <Empty/>
                  : pokes.map((data, i) => (
                      <div 
                        className='col-6 col-md-4 py-3'
                        id={data.id} key={i}
                        onClick={() => getDetail(data.id)}
                      >
                        <Item data={data} key={i} pokeColors={pokeColors}  />
                      </div>
                    ))
                }
            </div>
          </div>
          <div className='col-4 d-none d-lg-block'>
            <div
              className={`bg-white ${ isFixed ? 'position-sticky top-0 pt-4' : ''}`}
              style={{zIndex: 1}}
            >
              { selectPoke ? 
                <Details
                  data={selectPoke}
                  color={pokeColors[selectPoke.types[0].type.name]}
                /> : <EmptySelectPoke/> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;