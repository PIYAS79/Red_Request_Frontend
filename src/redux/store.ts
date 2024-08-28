import { configureStore } from "@reduxjs/toolkit";
import Persisted_Root_AuthReducer from './features/auth.slice';
import baseApi from "./apis/baseApi";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'auth',
    storage
}
const persistedAuthReducer = persistReducer(persistConfig, Persisted_Root_AuthReducer);




const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedAuthReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat(baseApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);
export default store;