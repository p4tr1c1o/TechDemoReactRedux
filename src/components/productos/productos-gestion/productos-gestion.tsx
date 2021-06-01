import { PROCESANDO } from '../../../reducers/productos-reducer'
import { createProducto, deleteProducto, getProductos, updateProducto } from '../../../actions/productos-actions'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useEffect, useState } from 'react';
import './productos-gestion.css';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Card, CircularProgress, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import ProductoFormulario from '../producto-formulario/producto-formulario';
import { Producto } from '../../../domain/producto-model';



export const ProductosGestion = () => {
    const dispatch = useAppDispatch();
    const [openDialog, setOpenDialog] = useState(false);
    const prod = new Producto();

    console.log("producto1");

    const [model, setModel] = useState<Producto>(prod);
    const productos = useAppSelector(state => state.productos.allProductos);
    const loading = useAppSelector(state => state.productos.procesando)
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100, align: "center", headerAlign: "center", disableColumnMenu: true },
        { field: 'nombre', headerName: 'Nombre', width: 130 },
        { field: 'descripcion', headerName: 'Descripcion', width: 130, flex: 1 },
        {
            field: 'actions', headerName: ' ', width: 150
            , renderCell: buildBotonesGrilla(onEdit, onDelete), sortable: false, disableClickEventBubbling: true,
        },
    ];

    useEffect(() => {
        dispatch(PROCESANDO());
        dispatch(getProductos());
    }, []);

    function onNuevo() {
        setModel(new Producto());
        setOpenDialog(true);
    };

    function onDelete(model) {
        dispatch(deleteProducto(model));
    }

    function onEdit(row: Producto) {
        setModel(row);
        setOpenDialog(true);
    }

    function onGuardar(model: Producto) {
        if (model.id) {
            dispatch(updateProducto(model));
        }
        else {
            dispatch(createProducto(model));
        }
        setOpenDialog(false);
    };

    function onCancelar() {
        setOpenDialog(false);
    };

    if (loading) return (<CircularProgress />)

    return (
        <section>
            <div className="row-end">
                <Button variant="outlined" color="primary" onClick={onNuevo}>+ Nuevo Producto</Button>
            </div>
            <Card className="card-grid">
                <DataGrid rows={productos} columns={columns} pageSize={8} />
            </Card>

            <ProductoFormulario open={openDialog} model={model} onCancelar={onCancelar} onGuardar={onGuardar} />
        </section >
    )
}

function buildBotonesGrilla(onEdit: Function, onDelete: Function) {
    return (params: GridCellParams) => {
        return (
            <article>
                <strong>
                    <IconButton onClick={() => onEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                </strong >
                <strong>
                    <IconButton onClick={() => onDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </strong >
            </article>
        );
    };
}


export default ProductosGestion;
