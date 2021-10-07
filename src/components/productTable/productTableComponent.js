import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './productTableComponent.css';

import ProductCardComponent from '../productcard/ProductCardComponent';

const listaImagenes = require.context('./../../assets/products')




const TablaProductsComponent = ({ productList }) => {



    const findImage = (id) => {
        try {
            return listaImagenes(`./${id}.jpg`).default

        } catch (error) {
            return ""; //por si no existe una imagen en recursos, para el id de producto, sin esto salta error
        }
    }



    return (
        <div className="card-columns">
            <div class="row justify-content-start">
                {
                    productList.map(producto => (
                        <div class="col-3"><ProductCardComponent producto={producto} /></div>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default TablaProductsComponent;



