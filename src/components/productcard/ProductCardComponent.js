import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


const listaImagenes = require.context('./../../assets/products')

const ProductCardComponent = ({ producto }) => {



    const findImage = (id) => {
        try {
            return listaImagenes(`./${id}.jpg`).default

        } catch (error) {
            return ""; //por si no existe una imagen en recursos, para el id de producto, sin esto salta error
        }
    }


    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 440,maxHeight: 150,}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img  src={findImage(producto.id)} className="card-img" alt={ producto.id } />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"> { producto.name } </h5>
                    <p className="card-text"> { producto.caption} </p>
                    <p className="card-text">
                        <small className="text-muted"> { producto.caption } </small>
                    </p>
                </div>
            </div>
        </div>
    </div>

    );
}

export default ProductCardComponent;

/*
        <>

            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src={findImage(producto.id)} />
                <div class="card-body">
                    <p class="card-text">{producto.name}</p>
                    <p class="card-text">{producto.caption}</p>
                    <p class="card-text">{producto.category}</p>
                </div>
            </div>
        </>






                <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 440,maxHeight: 150,}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img  src={findImage(producto.id)} className="card-img" alt={ producto.id } />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"> { producto.name } </h5>
                    <p className="card-text"> { producto.name} </p>
                    <p className="card-text">
                        <small className="text-muted"> { producto.name } </small>
                    </p>
                </div>
            </div>
        </div>
    </div>


*/