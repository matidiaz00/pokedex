import React from 'react'
import Stat from './Stat'

function PokedexScreen({ pokemon, loading, error }){
    // Si hay un error en la petición a la API, devuelve este componente.
    // Recuerda que al hacer un return, el resto de código, no se ejecutará.
    if(error){
      return (
        <div className="pokedex-screen">
          Hubo un error buscando tu pokemon
        </div>
      )
    }
  
    // Si ya pasamos la validación del error...
    return (
      <div className="pokedex-screen">
        { !pokemon || loading ? // Si no hay pokemon o si esta cargando
          'Aun no hay ningun pokemon, cargando...' : // Todo cool, entonces devuelve un lindo pokemon
          <div className="pokemon-info">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <img
              className="pokemon-img"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <ul className="pokemon-stats">
              {pokemon.stats.map(item => <Stat key={item.stat.name} item={item}/>)}
            </ul>
          </div>
        }
      </div>
    )
  }
  
  

export default PokedexScreen
