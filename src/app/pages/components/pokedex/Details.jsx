import React from 'react';
import PokeBallRotate from '../../../shared/components/PokeBallRotate';

function Details({data, color}) {

  return (
    <div className="Details">
      <div className="card w-100">
        <div className="card-header" style={{backgroundColor: color}}>
          <div className='d-flex justify-content-between mb-2 align-items-end'>
            <span className='h3 m-0 text-white text-capitalize'>{data.name}</span>
            <span className='h5 m-0 text-white'>N° {(data.id).toLocaleString('en-US', {minimumIntegerDigits: 4, useGrouping:false})}</span>
          </div>
          {
            data.types.length === 0 ? null
            : data.types.map((data, i) => (
              <span
                className='badge rounded-pill fs-6 fw-normal px-4 py-2 me-2 text-white bg-white bg-opacity-25 text-capitalize'
                id={i} key={i}
              >{data.type.name}</span>
            ))
          }
          <div className='position-relative text-center' style={{marginTop: '-1rem'}}>
            <img
              loading="lazy"
              src={data.sprites.other.home.front_default}
              className="mx-auto w-75 position-relative"
              alt={'hola mundo'}
              style={{zIndex: 1}}
            />
            <div className="position-absolute bottom-0 start-50 translate-middle-x opacity-25" style={{marginLeft: '-1.5rem'}}>
              <PokeBallRotate />
            </div>
            <div
              className='bg-white rounded-top'
              style={{margin: '-4rem -1rem -0.6rem', height: '4rem', width: 'calc(100% + 2rem)'}}
            ></div>
          </div>
        </div>
        <div className="card-body">
          <nav className='mb-3'>
            <div className="nav nav-pills" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Stats</button>
              <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Moves</button>
              <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Others</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
              <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
              <ul className="list-group">
                {
                  data.stats.length === 0 ? null
                  : data.stats.slice(0,4).map((data, i) => (
                    <li id={i} key={i} className="list-group-item d-flex justify-content-between align-items-center">
                      {data.stat.name}
                      <span className="badge bg-primary rounded-pill">{data.base_stat}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
              {
                data.moves.length === 0 ? null
                : data.moves.slice(0,15).map((data, i) => (
                    <span id={i} key={i} className="badge rounded-pill m-1 text-black bg-black bg-opacity-25">{data.move.name}</span>
                ))
              }
            </div>
            <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Height
                  <span className="badge bg-primary rounded-pill">{data.height}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Weight
                  <span className="badge bg-primary rounded-pill">{data.weight}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Base experience
                  <span className="badge bg-primary rounded-pill">{data.base_experience}</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Details;
