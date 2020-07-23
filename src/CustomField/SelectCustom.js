import React, { useEffect } from 'react'
import Select from  'react-select'
function SelectCustom(props) {
    const {options, label, field, form}=props
    const {name, value}=field;
    const {errors, touched}=form
    const showError = errors[name]&&touched[name]
    const selectedOption=options.find( option => value===option.value)
    useEffect(()=>{}, [options])
    const changeSelectedValue=(SelectedValue)=>{
            form.setFieldValue(name, SelectedValue.value)
    }
    return (
        <div className="mb-2">
                {label && <label for={name}>{label}</label>}
                <Select 
                options={options}
                id={name}
                {...field}
                value={selectedOption}
                onChange={changeSelectedValue}>
                </Select>
    {showError && <p>{errors[name]}</p>}
        </div>
        
    )
}
export default SelectCustom
