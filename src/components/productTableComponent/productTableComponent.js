import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ProductCardComponent from '../productCardComponent/ProductCardComponent';
import { padding } from '@material-ui/system';
const listaImagenes = require.context('./../../assets/products')






const TablaProductsComponent = ({ productList }) => {

    return (
        <div id="contenedor_principal_tabla" style={{padding:'30px'}}>
            <div className="card-columns">
                <div className="row justify-content-start">
                    {
                        productList.map(producto => (
                            <div className="col-3"><ProductCardComponent producto={producto} /></div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TablaProductsComponent;



