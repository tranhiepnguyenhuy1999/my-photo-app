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
            }
        }
    }
);
const {actions, reducer}= photoStore;
export const {addNewPhoto, removePhoto}=actions;
export default reducer;