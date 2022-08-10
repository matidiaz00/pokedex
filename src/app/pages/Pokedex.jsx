import React, { useState, useEffect, useContext } from 'react';
import { pokeColors } from '../shared/providers/Api';
import { PokeContext } from '../PokedexContext';
import Item from './components/pokedex/Item';
import Filters from './components/pokedex/Filters';
import Details from './components/pokedex/Details';
import EmptySelectPoke from './components/pokedex/EmptySelectPoke';
import Empty from './components/pokedex/Empty';
import { setAllPokes, getClientHeight } from '../shared/providers/PokeFilter';

function Pokedex() {

  const pokeContext = useContext(PokeContext);

  const howManyAdd = 10;

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
    setAllPokes(pokeContext, pokeFilters, offset, howManyAdd)
      .then((allPokes) => {
        setPokes(oldPokes => [...oldPokes, ...allPokes]);
        setOffset((offset) => offset + howManyAdd);
        setIsScroll(false);
      });
    // eslint-disable-next-line
	}, [isScroll]);

  useEffect(() => {
    setAllPokes(pokeContext, pokeFilters, offset, howManyAdd)
      .then((allPokes) => {
        setPokes(oldPokes => [...oldPokes, ...allPokes]);
        setOffset((offset) => offset + howManyAdd);
      });
    // eslint-disable-next-line
  }, [pokeFilters]);

  const handleScroll = (e) => {
    const windowHeight = window.innerHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeight = e.target.documentElement.scrollHeight;
    const headerHeight = getClientHeight('Header');
    const filtersHeight = getClientHeight('Filters');
    if (windowHeight + scrollTop + 1 >= scrollHeight || isScroll) setIsScroll(true);
    if (scrollTop + 1 >= headerHeight + filtersHeight) setIsFixed(true);
    else setIsFixed(false);
  }

  useEffect(() => {
		window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line
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