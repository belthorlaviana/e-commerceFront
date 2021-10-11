import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

const listaImagenes = require.context('./../../assets/products', true)



const ProductCardComponent = ({ producto }) => {

    const findImage = (id) => {
        try {
            return listaImagenes(`./${id}.jpg`).default

        } catch (error) {
            return ""; //por si no existe una imagen en recursos, para el id de producto, sin esto salta error
        }
    }

    return (
        <div id="contenedor_card" style={{marginBottom: '30px'
        }}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="350"
                        image={findImage(producto.id)}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {producto.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {producto.caption}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    );
};

export default ProductCardComponent;