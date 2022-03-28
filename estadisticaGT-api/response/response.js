//Creación de la Plantilla Response
export const response = {
    //Si la petición se ejecuta con exito
    succes:(req, res, message, status)=>{
        let statusCode = status || 200;
        let data = message || '';
        res.status(statusCode).send({
            error: false,
            status: statusCode,
            body: data
        })
    },
    //Si la petición falla
    error:(req, res, message, status)=>{
        let statusCode = status || 500;
        let data = message || 'Error Interno del Servidor';
        res.status(statusCode).send({
            error: true,
            status: statusCode,
            body: data
        })
    }
}