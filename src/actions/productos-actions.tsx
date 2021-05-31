import Producto from '../domain/producto-model';
import { SET_PRODUCTOS, ADD_PRODUCTO, EDIT_PRODUCTO, REMOVE_PRODUCTO } from '../reducers/productos-reducer';
import { ERROR, SUCCESS } from '../reducers/snackbar-reducer';


export function getProductos() {
    return dispatch => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        fetch('http://localhost:5000/productos', { method: "GET" })
            .then(handleErrors)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                dispatch(SET_PRODUCTOS(data));
            });
    };
}

export function createProducto(producto: Producto) {
    return dispatch => {
        fetch('http://localhost:5000/productos', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(producto)
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(result => {
                dispatch(ADD_PRODUCTO(result.producto));
                dispatch(SUCCESS("Producto Creado"));
            });
    };
}

export function updateProducto(producto: Producto) {

    return dispatch => {
        fetch('http://localhost:5000/productos', {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(producto)
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(result => {
                // console.log(data);
                dispatch(EDIT_PRODUCTO(result.producto));
                dispatch(SUCCESS("Cambios Guardados"));
            });
    };
}

export function deleteProducto(producto: Producto) {
    return dispatch => {
        fetch('http://localhost:5000/productos', {
            method: "DELETE",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id: producto.id })
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(() => {
                dispatch(REMOVE_PRODUCTO(producto));
                dispatch(SUCCESS("Producto Eliminado"));
            })
            .catch(e => {
                dispatch(ERROR(e.message));
                console.error(e);
            });
    };
}


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status + "-" + response.statusText);
    }
    return response;
}
