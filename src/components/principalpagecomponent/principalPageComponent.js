import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavbarComponent from '../navbarcomponent/navbarComponent';
import TablaProductsComponent from '../productTable/productTableComponent';

import { httpGet } from './../../http/httpOperations'
import endpoints from './../../http/endpoints.json'



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
            <TablaProductsComponent productList={productList} />
        </>
    );
}
export default PrincipalPageComponent;

