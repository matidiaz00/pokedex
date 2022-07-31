import React from 'react';

function Empty() {

    /*
    const resetPokeFilter = () => {
        setPokeFilters({
          name: '',
          alphabet: false,
          number: true,
          type: 'Type',
          ability: 'Ability',
          move: 'Move'
        })
    }
    */

    return (
        <div className="Empty">
            <div className='d-flex py-5 flex-column text-center align-items-center'>
                <span>There are no pokemons with these features, try with others.</span>
                {/*
                <span className='pt-3 pb-2'>Or do you want to reset the filter?</span>
                <button
                className='btn btn-primary btn-sm px-3'
                type="button"
                onClick={() => resetPokeFilter()}
                >Reset</button>
                */}
            </div>
        </div>
    );
}

export default Empty;
