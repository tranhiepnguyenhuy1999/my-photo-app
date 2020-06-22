import{configureStore} from '@reduxjs/toolkit'
import photoStore from '../features/Photo/photoSlice'
const rootReducer={
    photoStore: photoStore 
};
const store= configureStore({
    reducer: rootReducer
}
);

export default store;