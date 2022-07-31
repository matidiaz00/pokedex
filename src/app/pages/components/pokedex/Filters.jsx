import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Input, Select } from '../../../shared/components/Inputs';
import { getPokeProviders } from '../../../shared/providers/Api';

function Filters({defaultData, change}) {

  const [isActive, setIsActive] = useState(false);
  const [pokeProviders, setPokeProviders] = useState({ order: [], name: [], type: [], ability: [], move: [] });
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: defaultData.name,
      type: defaultData.type,
      ability: defaultData.ability,
      move: defaultData.move
    }
  });

  const onChange = (data) => {
    change(data)
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(current => !current);
  };

  useEffect(() => {
    getPokeProviders()
      .then((data) => {
        setPokeProviders({
          order: [{name:'alphabet'}, {name:'numeric'}],
          name: data[0],
          type: data[1],
          ability: data[2],
          move: data[3]
        })
      });
  }, []);

  return (
    <form onSubmit={handleSubmit(onChange)} id="Filters" className="Filters">
      <div className='d-flex w-100'>
        <Input label="Search for pokemon name" icon="search" {...register("name", {onChange: handleSubmit(onChange)})} />
        <button type="button" onClick={handleClick} className="btn btn-light ms-3">
          <i className={`bi bi-${isActive ? 'x' : 'filter'}`}></i>
        </button>
      </div>

      <div className={`${isActive ? 'd-flex' : 'd-none'} pt-3 justify-content-between align-items-center`}>
        <div className='flex-fill pe-4'>
          <Select label="Order" options={pokeProviders.order} {...register("order", {onChange: handleSubmit(onChange)})} />
        </div>
        <div className='flex-fill pe-4'>
          <Select label="Type" options={pokeProviders.type} {...register("type", {onChange: handleSubmit(onChange)})} />
        </div>
        <div className='flex-fill pe-4'>
          <Select label="Ability" options={pokeProviders.ability} {...register("ability", {onChange: handleSubmit(onChange)})} />
        </div>
        <div className='flex-fill'>
          <Select label="Move" options={pokeProviders.move} {...register("move", {onChange: handleSubmit(onChange)})} />
        </div>
      </div>
    </form>
  );

}

export default Filters;