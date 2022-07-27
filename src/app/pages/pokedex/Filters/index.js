import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { CheckBox, Input, Select } from './Inputs';
import { getPokeProviders } from '../../../shared/providers/Api';

function Filters({submit}) {

  const [isActive, setIsActive] = useState(false);
  const [pokeProviders, setPokeProviders] = useState({ name: [], type: [], ability: [], move: [] });
  const { register, handleSubmit } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    submit(data)
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(current => !current);
  };

  useEffect(() => {
    getPokeProviders()
      .then((data) => {
        setPokeProviders({
          name: data[0],
          type: data[1],
          ability: data[2],
          move: data[3]
        })
      });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="Filters" className="Filters">

      <div className='d-flex w-100'>
        <Input label="Search for pokemon name" icon="search" {...register("name", {onChange: handleSubmit(onSubmit)})} />
        <button type="button" onClick={handleClick} className="btn btn-light ms-3">
          <i className={`bi bi-${isActive ? 'x' : 'filter'}`}></i>
        </button>
      </div>

      <div className={`${isActive ? 'd-flex' : 'd-none'} pt-3 justify-content-between align-items-center`}>
        <div className='me-4'>
          <CheckBox icon="sort-alpha" {...register("alphabet", {onChange: handleSubmit(onSubmit)})} />
        </div>
        <div className='me-4'>
          <CheckBox icon="sort-numeric" {...register("number", {onChange: handleSubmit(onSubmit)})} />
        </div>
        <div className='flex-fill pe-4'>
          <Select label="Type" options={pokeProviders.type} {...register("type", {onChange: handleSubmit(onSubmit)})} />
        </div>
        <div className='flex-fill pe-4'>
          <Select label="Ability" options={pokeProviders.ability} {...register("ability", {onChange: handleSubmit(onSubmit)})} />
        </div>
        <div className='flex-fill'>
          <Select label="Move" options={pokeProviders.move} {...register("move", {onChange: handleSubmit(onSubmit)})} />
        </div>
      </div>
    </form>
  );

}

export default Filters;