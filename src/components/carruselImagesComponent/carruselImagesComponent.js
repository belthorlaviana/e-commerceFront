import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { findImage } from './../../utilities/utils';
const listaImagenes = require.context('./../../assets/carrousel', true)



const CarruselImagesComponent = () => {

    return (
        <div style={{ padding: '30px', height: '10px' }}>
            <Carousel
                variant="dark"
                //controls={false} 
                interval={4000}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                nextLabel={""}//pa quitar la palabra next del carrousel
                prevLabel={""}//pa quitar la palabra previus del carrousel
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={findImage("carrousel_001", listaImagenes)}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={findImage("carrousel_002", listaImagenes)}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={findImage("carrousel_003", listaImagenes)}
                    />
                </Carousel.Item>
            </Carousel>
        </div >
    );
}

export default CarruselImagesComponent;


