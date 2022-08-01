import React, {useState, useEffect} from 'react';

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

export const InputSearch = React.forwardRef(({ onChange, name, label, icon }, ref) => (
    <>
        <div className="input-group flex-grow-1">
            <span className="input-group-text bg-transparent">
                <i className="bi bi-search"></i>
            </span>
            <input
                type="text"
                name={name}
                placeholder={label}
                className="form-control"
                ref={ref} onChange={onChange}
            />
        </div>
    </>
));

export const CheckBox = React.forwardRef(({ onChange, name, icon, defaultData}, ref) => {

    const [isActive, setIsActive] = useState(false);

    const checked = (e) => {
        setIsActive(e.target.checked)
    };

    useEffect(() => {
        if (defaultData != null) setIsActive(defaultData)
    }, []);

    return (
    <>
        <input
            type="checkbox"
            className="btn-check"
            name={name}
            id={name}
            ref={ref}
            onChange={(e) => {
                onChange(e)
                checked(e)
            }}
        />
        <label className={`btn btn-${isActive?'primary':'secondary'}`} htmlFor={name}>
            {icon ?
                <i className={`bi bi-${icon}-down`}></i>
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