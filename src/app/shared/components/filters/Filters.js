import React from 'react';

function Filters({filters}) {

  return (
    <div className="Filters">
      <div className='d-flex w-100'>
        <div className="input-group flex-grow-1">
          <input type="text" placeholder="Search for pokemon name" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
          <button type="submit" className="input-group-text">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <button type="button" className="btn btn-light ms-3">
          <i className="bi bi-filter"></i>
          {/*<i className="bi bi-x"></i>*/}
        </button>
      </div>
      <div className="d-flex pt-3 justify-content-between align-items-center">
        <div className='me-4'>
          <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="option1">
            <i className="bi bi-sort-alpha-down"></i>
            {/*<i className="bi bi-sort-alpha-up"></i>*/}
          </label>
        </div>
        <div className='me-4'>
          <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="option2">
            <i className="bi bi-sort-numeric-down"></i>
            {/*<i className="bi bi-sort-numeric-up"></i>*/}
          </label>
        </div>
        <div className='flex-fill pe-4'>
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue="">Type</option>
            {filters.type.map((data, i) => (
              <option value={data.name} key={i} className="text-capitalize">{data.name}</option>
            ))}
          </select>
        </div>
        <div className='flex-fill pe-4'>
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue="">Ability</option>
            {filters.ability.map((data, i) => (
              <option value={data.name} key={i} className="text-capitalize">{data.name}</option>
            ))}
          </select>
        </div>
        <div className='flex-fill'>
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue="">Move</option>
            {filters.move.map((data, i) => (
              <option value={data.name} key={i} className="text-capitalize">{data.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
