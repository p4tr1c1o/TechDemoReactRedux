
import MuiAlert from '@material-ui/lab/Alert';
import ProductosGestion from './components/productos/productos-gestion/productos-gestion';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks'
import { Paper } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import { CLEAR } from './reducers/snackbar-reducer';

export const App = () => {
    const { REACT_APP_ENV } = process.env;
    const dispatch = useAppDispatch();
    const { message, showMessage, severity } = useAppSelector(state => state.snackbar);

    function onClose() {
        dispatch(CLEAR());
    }

    return (

        <main>
            <Paper className="papel">

                <header>
                    <h1>ENV:{process.env.NODE_ENV}</h1>
                </header>
                <ProductosGestion />

                <Snackbar open={showMessage} autoHideDuration={6000} onClose={onClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={onClose} severity={severity}>
                        {message}
                    </MuiAlert>
                </Snackbar>

            </Paper>
        </ main>

    );

}

export default App;