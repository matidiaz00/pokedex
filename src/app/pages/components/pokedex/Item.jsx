import React from 'react';
import { useNavigate } from "react-router-dom";

function Item({data, pokeColors}) {

  let navigate = useNavigate();

  const setPokeColor = () => {
    return pokeColors[data.types[0].type.name]
  }

  const clickMobile = () => {
    navigate(`/pokedex/${data.id}`);
  }

  return (
    <div className="Item">
      <div className='card position-relative'>
        <div className="card-body position-relative" style={{backgroundColor: setPokeColor()}}>
          <div className='d-flex justify-content-between mb-2 align-items-end'>
            <h5 className='card-title text-capitalize text-white'>{data.name}</h5>
            <span className='card-subtitle fs-6 mb-2 text-white'>N° {(data.id).toLocaleString('en-US', {minimumIntegerDigits: 4, useGrouping:false})}</span>
          </div>
          <div className='card-text d-inline-flex flex-column mt-2' style={{minHeight: '57px'}}>
            {data.types.map((data, i) => (
              <span
              className='badge rounded-pill fw-normal px-3 py-1 mb-2 text-white bg-white bg-opacity-25 text-capitalize w-auto'
                id={i} key={i}
              >{data.type.name}</span>
            ))}
          </div>
          <div className="position-absolute bottom-0 end-0">
            <img
              loading="lazy"
              src={data.sprites.other.home.front_default}
              className="mw-100 mb-3 me-3"
              width="91" height="91"
              alt='pokemon'
            />
          </div>
          <a onClick={() => null} className="d-none d-lg-block card-link text-white stretched-link">Ver más</a>
          <a onClick={() => clickMobile()} className="d-block d-lg-none card-link text-white stretched-link">Ver más</a>
        </div>
      </div>
    </div>
  );
}

export default Item;
