import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ProductInterface } from '../../interfaces';

interface PropsInterface {
    showComponent: boolean;
    closeHandler: any;
    children: any;
    data?: ProductInterface;
    onClickAdd?: any;
    onClickRemove?: any;
    exist: boolean;
}

const ModalComponent = (props: PropsInterface) => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        props.closeHandler(false);
    };

    useEffect(() => {
        setShowModal(props.showComponent);
    }, [props.showComponent])

    const Add = (element: any) => {
        props.onClickAdd(element);
    }

    const Remove = (element: any) => {
        props.onClickRemove(element);
    }

    return (
        <>
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <div>
                    {
                        props.children
                    }
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    {props.exist ? <Button variant="danger" onClick={() => { Remove(props.data) }}>Eliminar</Button> : <Button variant="primary" onClick={() => { Add(props.data) }}>Agregar</Button>}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;