import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { CheckBox, Input, Select } from './Inputs';

function Filters({options, submit}) {

  const [isActive, setIsActive] = useState(false);
  const { register, handleSubmit } = useForm({
    mode: "onBlur" // "onChange"
  });

  const onSubmit = (data) => {
    submit(data)
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(current => !current);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Filters">

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
          <Select label="Type" options={options.type} {...register("type", {onChange: handleSubmit(onSubmit)})} />
        </div>
        <div className='flex-fill pe-4'>
          <Select label="Ability" options={options.ability} {...register("ability", {onChange: handleSubmit(onSubmit)})} />
        </div>
        <div className='flex-fill'>
          <Select label="Move" options={options.move} {...register("move", {onChange: handleSubmit(onSubmit)})} />
        </div>
      </div>
    </form>
  );

}

export default Filters;