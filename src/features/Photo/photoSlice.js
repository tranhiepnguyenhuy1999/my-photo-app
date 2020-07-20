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
                return state.filter(photo => photo.id !== action.payload)
            },
            editPhoto: (state, action)=>{
                const index= state.findIndex(photo => photo.id === action.payload.id)
                if(index>-1)
                state[index]=action.payload
                },
            removeAll: (state, action)=>{
                return state=[]
            }
        }
    }
);
const {actions, reducer}= photoStore;
export const {
    addNewPhoto,
    removePhoto, 
    editPhoto,
    removeAll}=actions;
export default reducer;