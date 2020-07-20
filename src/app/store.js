import { configureStore } from '@reduxjs/toolkit';
import category from '../features/Photo/catSlice';
import photoStore from '../features/Photo/photoSlice';
const rootReducer={
    photoStore: photoStore,
    category: category, 
};
const store= configureStore({
    reducer: rootReducer
}
);

export default store;