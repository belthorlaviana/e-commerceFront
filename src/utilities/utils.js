

export const findImage = (id, listaImagenes) => {
    try {
        return listaImagenes(`./${id}.jpg`).default
        
    } catch (error) {
        return ""; //por si no existe una imagen en recursos, para el id de producto, sin esto salta error
    }
}