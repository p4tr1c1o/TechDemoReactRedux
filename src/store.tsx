import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productosReducer from './reducers/productos-reducer';


export const store = configureStore({
    reducer: {
        productos: productosReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
