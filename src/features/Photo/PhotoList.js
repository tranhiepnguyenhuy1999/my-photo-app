import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PhotoItem from './PhotoItem'

function PhotoList() {
    return (
        <Container className="mt-3">
            <Row>
                <PhotoItem></PhotoItem>
                <PhotoItem></PhotoItem>
                <PhotoItem></PhotoItem>
                <PhotoItem></PhotoItem>
            </Row>
        </Container>
    )
}
export default PhotoList 