import React from 'react';
import PokeBallRotate from '../../../shared/components/PokeBallRotate';

function EmptySelectPoke() {

  return (
    <div className="EmptySelectPoke">
      <div className='d-flex flex-column text-center justify-content-center align-items-center'>
        <div className='position-relative w-80 mb-4'>
          <PokeBallRotate />
          <div className="position-absolute top-50 start-50 translate-middle">
            <i className="bi bi-question text-secondary" style={{fontSize: '162px'}}></i>
          </div>
        </div>
        <div className='h3'>No pokemon selected</div>
        <div className='h5 text-secondary'>Click a pokemon to see more information!</div>
      </div>
    </div>
  );
}

export default EmptySelectPoke;
