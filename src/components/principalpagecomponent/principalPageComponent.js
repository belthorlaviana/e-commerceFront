import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

import NavbarComponent from '../navbarComponent/navbarComponent';
import TablaProductsComponent from '../productTableComponent/productTableComponent';
import CarruselImagesComponent from '../carruselImagesComponent/carruselImagesComponent';

import { httpGet } from '../../http/httpOperations'
import endpoints from '../../http/endpoints.json'


const PrincipalPageComponent = (props) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        peticionGet();
    }, [])//[] poniendo corchetes solo se ejecuta una vez al inicio

    const peticionGet = () => {
        httpGet(endpoints.GET_ALL_PRODUCTOS).then(res => {
            setProductList(res.data)
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <>
            <NavbarComponent setProductList={setProductList} />
            <CarruselImagesComponent/>



        </>
    );
}
export default PrincipalPageComponent;

//            <TablaProductsComponent productList={productList} />