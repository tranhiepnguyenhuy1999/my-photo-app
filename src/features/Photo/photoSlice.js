import {createSlice} from '@reduxjs/toolkit';

const photoStore= createSlice(
    {
        name: 'photo',
        initialState: [],
        reducers:{
            addNewPhoto: (state, action)=>{
                state.push(action.payload)
            }
        }
    }
);
const {actions, reducer}= photoStore;
export const {addNewPhoto}=actions;
export default reducer;