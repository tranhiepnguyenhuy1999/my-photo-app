import React from 'react'
import Select from  'react-select'
function SelectCustom(props) {
    const {options, label, field, form}=props
    const {name, value}=field;

    const selectedOption=options.find( option => value===option.value)

    const changeSelectedValue=(SelectedValue)=>{
            // let changeEvent={
            //     target:{
            //         name: name,
            //         value: SelectedValue.value
            //     }
            // }
            // field.onChange(changeEvent)
            form.setFieldValue(name, SelectedValue)
    }
    return (
        <div>
                {label && <label for={name}>{label}</label>}
                <Select 
                options={options}
                id={name}
                {...field}
                value={selectedOption}
                onChange={changeSelectedValue}>
                </Select>
        </div>
        
    )
}
export default SelectCustom
