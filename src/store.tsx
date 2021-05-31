import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import snackbarReducer from './reducers/snackbar-reducer';
import productosReducer from './reducers/productos-reducer';


export const store = configureStore({
    reducer: {
        snackbar: snackbarReducer,
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
