import React from 'react';

function Item({data, pokeColors}) {

  const setPokeColor = () => {
    return pokeColors[data.types[0].type.name]
  }

  return (
    <div className="Item">
      <div className='card'>
        <div className="card-body" style={{backgroundColor: setPokeColor()}}>
          <img loading="lazy" src={data.sprites.other.home.front_default} className="mw-100" width="91" height="91" alt='pokemon' />
          <h5 className='card-title text-capitalize'>{data.name}</h5>
          <span className='card-subtitle mb-2 text-muted'>N°{data.id}</span>
          <div className='card-text'>
            {data.types.map((data, i) => (
              <span
                className='badge text-bg-primary text-capitalize'
                id={i} key={i}
              >{data.type.name}</span>
            ))}
          </div>
          <a href="https://www.google.com" className="card-link">Ver más</a>
        </div>
      </div>
    </div>
  );
}

export default Item;
