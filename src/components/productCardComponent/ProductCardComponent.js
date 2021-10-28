import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { findImage } from './../../utilities/utils';
const listaImagenes = require.context('./../../assets/products', true)



const ProductCardComponent = ({ producto }) => {

    return (
        <div id="contenedor_card" style={{marginBottom: '30px'
        }}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="350"
                        image={findImage(producto.id,listaImagenes)}
                        alt="texto que se muestra si la imagen no carga"
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