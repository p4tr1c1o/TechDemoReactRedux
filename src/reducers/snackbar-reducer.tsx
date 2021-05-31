import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SnackbarState = {
    message: string,
    showMessage: boolean,
    severity?: "error" | "warning" | "info" | "success"
}

const initialState: SnackbarState = {
    message: '',
    showMessage: false,
}

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        SUCCESS: (state: SnackbarState, action: PayloadAction<string>) => {
            state.showMessage = true;
            state.message = action.payload;
            state.severity = 'success'
        },
        ERROR: (state: SnackbarState, action: PayloadAction<string>) => {
            state.showMessage = true;
            state.message = action.payload;
            state.severity = 'error'
        },
        CLEAR: (state) => {
            state.message = '';
            state.showMessage = false;
            state.severity = undefined;
        }
    }
});

export const {
    SUCCESS,
    ERROR,
    CLEAR
} = snackbarSlice.actions

export default snackbarSlice.reducer
