import React from 'react';

function Filters({filters}) {

  return (
    <div className="Filters">
      <div className="input-group">
        <input type="text" placeholder="Search for pokemon name" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
        <span className="input-group-text">Search</span>
      </div>
      <div className="row pt-3 align-items-center">
        <div className="col-3">
          <div className='d-flex justify-content-between'>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">A-Z</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">0-100</label>
            </div>
          </div>
        </div>
        <div className="col-3">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue="">Type</option>
            {filters.type.map((data, i) => (
              <option value={data} key={i} className="text-capitalize">{data}</option>
            ))}
          </select>
        </div>
        <div className="col-3">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue="">Ability</option>
            {filters.ability.map((data, i) => (
              <option value={data} key={i} className="text-capitalize">{data}</option>
            ))}
          </select>
        </div>
        <div className="col-3">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue="">Move</option>
            {filters.move.map((data, i) => (
              <option value={data} key={i} className="text-capitalize">{data}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
