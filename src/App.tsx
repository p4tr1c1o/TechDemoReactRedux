import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './store';
import ProductosGestion from './components/productos/productos-gestion/productos-gestion';
import './App.css';
import { Paper } from '@material-ui/core';

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                {/* Router */}
                <main>
                    <Paper className="papel">

                        <header>
                            <h1>hola mundo</h1>
                        </header>
                        <ProductosGestion />
                    </Paper>
                </main>

            </Provider>
        );
    }
}
