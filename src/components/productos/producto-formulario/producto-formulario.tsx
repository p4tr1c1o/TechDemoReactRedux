import React from 'react'
import { Dialog, DialogTitle, DialogContent, Button } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { Box } from '@material-ui/core'
import { Field } from 'formik'
import { Producto } from '../../../domain/producto-model'
import './producto-formulario.css';

type FormProps = {
    model?: Producto,
    open: boolean,
    onGuardar: any,
    onCancelar: any,
}

function ProductoFormulario(props: FormProps) {
    return (
        <Dialog open={props.open} onClose={props.onCancelar} maxWidth={false}>
            <DialogTitle id="form-dialog-title">Producto</DialogTitle>
            <DialogContent>

                <Formik
                    initialValues={{
                        id: props.model?.id,
                        nombre: props.model?.nombre ?? "",
                        descripcion: props.model?.descripcion ?? "",
                    }}
                    validate={(values) => {
                        let errors: Partial<Producto> = {};

                        if (values.nombre.length < 3) {
                            errors.nombre = "Por favor ingrese un nombre valido";
                        }

                        return errors;
                    }}
                    onSubmit={(values) => {
                        // console.log(values);
                        props.onGuardar(values);
                    }} >
                    {({ isSubmitting, submitForm }) => (
                        <Form className="formulario column">
                            <Box margin={1}>
                                <Field
                                    component={TextField}
                                    type="text"
                                    variant="outlined"
                                    fullWidth={true}
                                    label="Nombre"
                                    name="nombre"
                                    required={true}
                                >
                                </Field>
                            </Box>
                            <Box margin={1}>
                                <Field
                                    component={TextField}
                                    type="text"
                                    variant="outlined"
                                    fullWidth={true}
                                    label="Descripcion"
                                    name="descripcion"
                                    multiline
                                    rows={4}>
                                </Field>
                            </Box>
                            <Box className="row-end">
                                <Button onClick={props.onCancelar} color="primary">
                                    Cancelar
                                </Button>
                                <Button onClick={submitForm} variant="contained" color="primary" disabled={isSubmitting}>
                                    Guardar
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </DialogContent >
        </Dialog >
    )
}

export default ProductoFormulario

