import React from 'react';
import { useForm } from "react-hook-form";
import { CheckBox, Input, Select } from './Inputs';

function Filters({options, submit}) {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    submit(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Filters">

      <div className='d-flex w-100'>
        <Input label="Search for pokemon name" icon="search" {...register("name")} />
        <button type="button" className="btn btn-light ms-3">
          <i className="bi bi-filter"></i>
          {/*<i className="bi bi-x"></i>*/}
        </button>
      </div>

      <div className="d-flex pt-3 justify-content-between align-items-center">
        <div className='me-4'>
          <CheckBox icon="sort-alpha" {...register("alphabet")} />
        </div>
        <div className='me-4'>
          <CheckBox icon="sort-numeric" {...register("number")} />
        </div>
        <div className='flex-fill pe-4'>
          <Select label="Type" options={options.type} {...register("type")} />
        </div>
        <div className='flex-fill pe-4'>
          <Select label="Ability" options={options.ability} {...register("ability")} />
        </div>
        <div className='flex-fill'>
          <Select label="Move" options={options.move} {...register("move")} />
        </div>
      </div>
    </form>
  );

}

export default Filters;