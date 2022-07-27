import React, { useState, useEffect } from 'react';
import { getAllPokes } from './shared/providers/Api';

const Context = React.createContext({})

export function PokedexContextProvider ({children}) {
  const [load, setLoad] = useState(true);
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    getAllPokes()
      .then((pokes) => {
        setLoad(false)
        setPokes(pokes)
      });
  }, []);

  return <Context.Provider value={{pokes, load}}>
    {children}
  </Context.Provider>
}

export default Context