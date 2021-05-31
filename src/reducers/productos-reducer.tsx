import Producto from '../domain/producto-model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, } from '../store';

type ProductosState = {
    procesando: boolean,
    allProductos: Producto[]
}

const initialState: ProductosState = {
    procesando: false,
    allProductos: []
}

const productosSlice = createSlice({
    name: "productos",
    initialState,
    reducers: {
        PROCESANDO: (state: ProductosState) => {
            state.procesando = true
        },
        SET_PRODUCTOS: (state: ProductosState, action: PayloadAction<Producto[]>) => {
            state.procesando = false;
            state.allProductos = action.payload;
        },
        ADD_PRODUCTO: (state: ProductosState, action: PayloadAction<Producto>) => {
            state.procesando = false;
            state.allProductos = [...state.allProductos, action.payload];
        },
        EDIT_PRODUCTO: (state, action) => {
            state.procesando = false;
            state.allProductos = state.allProductos
                .map(producto => (producto.id === action.payload.id) ? action.payload : producto)
        },
        REMOVE_PRODUCTO: (state, action: PayloadAction<Producto>) => {
            state.procesando = false;
            state.allProductos = state.allProductos.filter(p => p.id !== action.payload.id)
        },
    }
});

// Selectors
export const allProductos = (state: RootState) => state.productos;

export const {
    PROCESANDO,
    SET_PRODUCTOS,
    ADD_PRODUCTO,
    EDIT_PRODUCTO,
    REMOVE_PRODUCTO,
} = productosSlice.actions

export default productosSlice.reducer