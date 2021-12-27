import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { LoadComponent } from './loaderStyle';
const Loader = () => {
    return (
        <LoadComponent>
            <Container className='d-flex align-items-center'>
                <div><Spinner animation="grow" /></div>
            </Container>
        </LoadComponent>
    )
}

export default Loader;