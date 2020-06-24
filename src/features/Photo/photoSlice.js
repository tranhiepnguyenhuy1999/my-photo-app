import {createSlice} from '@reduxjs/toolkit';

const photoStore= createSlice(
    {
        name: 'photo',
        initialState: [],
        reducers:{
            addNewPhoto: (state, action)=>{
                state.push(action.payload)
            },
            removePhoto: (state, action)=>{
                return state.filter(item => item.id !== action.payload)
            },
            editPhoto: (state, action)=>{
                const index= state.findIndex(item => item.id === action.payload.id)
                if(index>-1)
                state[index]=action.payload
                },
        }
    }
);
const {actions, reducer}= photoStore;
export const {addNewPhoto, removePhoto, editPhoto}=actions;
export default reducer;