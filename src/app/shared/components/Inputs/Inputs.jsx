import React, {useState} from 'react';

export const Input = React.forwardRef(({ onChange, name, label, icon }, ref) => (
    <>
        <div className="input-group flex-grow-1">
            <input
                type="text"
                name={name}
                placeholder={label}
                className="form-control"
                ref={ref} onChange={onChange}
            />
            {icon ? 
                <button type="submit" className="input-group-text">
                    <i className={`bi bi-${icon}`}></i>
                </button>
            : null}
        </div>
    </>
));

export const CheckBox = React.forwardRef(({ onChange, name, icon }, ref) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        setIsActive(current => !current);
    };

    return (
    <>
        <input
            type="checkbox"
            className="btn-check"
            name={name}
            id={name}
            ref={ref} onChange={onChange}
        />
        <label className="btn btn-secondary" htmlFor={name} onClick={handleClick}>
            {icon ?
                <i className={`bi bi-${icon}-${isActive ? 'down' : 'up'}`}></i>
            : null}
        </label>
    </>
    )
});

export const Select = React.forwardRef(({ onChange, options, name, label }, ref) => (
    <>
        <select
            name={name} ref={ref} onChange={onChange}
            className="form-select form-select-sm"
        >
            <option defaultValue="">{label}</option>
            {options.map((data, i) => (
                <option value={data.name} key={i} className="text-capitalize">{data.name}</option>
            ))}
        </select>
    </>
));