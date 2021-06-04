
import MuiAlert from '@material-ui/lab/Alert';
import ProductosGestion from './components/productos/productos-gestion/productos-gestion';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks'
import { Paper } from '@material-ui/core';
import { Snackbar, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { CLEAR } from './reducers/snackbar-reducer';


export const App = () => {
    const dispatch = useAppDispatch();
    const { message, showMessage, severity } = useAppSelector(state => state.snackbar);

    function onClose() {
        dispatch(CLEAR());
    }

    return (

        <main>
            <Paper className="papel">
                <AppBar position="static">
                    <Toolbar className="row-space-between">
                        <div className="row">
                            <IconButton edge="start" aria-label="menu" color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6"> Productos </Typography>
                        </div>
                        <Typography variant="h6">{process.env.NODE_ENV}</Typography>
                    </Toolbar>
                </AppBar>

                {/* Routing */}
                <ProductosGestion />

                <Snackbar open={showMessage} autoHideDuration={6000} onClose={onClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={onClose} severity={severity}>
                        {message}
                    </MuiAlert>
                </Snackbar>

            </Paper>
        </ main >

    );

}

export const getApiURL = () => {
    const { REACT_APP_ENV } = process.env;
    if (REACT_APP_ENV?.toLowerCase() === "development") {
        return "localhost:5000";
    } else {
        return "moxtechdemo.sa-east-1.elasticbeanstalk.com";
    }

}

export default App;