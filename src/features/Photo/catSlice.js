import {createSlice} from '@reduxjs/toolkit';

const category= createSlice(
    {
        name: 'category',
        initialState: [{value: 1, label: "Teachnology"},
        {value: 2, label: "Homework"},
        {value: 3, label: "Entertainment"}],
        reducers:{
            addCat: (state, action)=>{
                state.push(action.payload)
            },
            removeCat: (state, action)=>{
                return state.filter(cat => cat.id !== action.payload)
            },
            editCat: (state, action)=>{
                const index= state.findIndex(cat => cat.id === action.payload.id)
                if(index>-1)
                state[index]=action.payload
                },
        }
    }
);
const {actions, reducer}= category;
export const {
    addCat,
    removeCat, 
    editCat,}=actions;
export default reducer;