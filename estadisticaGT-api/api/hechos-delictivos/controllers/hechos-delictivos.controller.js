import { EstadisticaModels } from "../models/hechos-delictivos.model.js";
import { response } from "../../../response/response.js"


const estadisticaModels = new EstadisticaModels();

export class EstadisticaController {
    constructor() { }

    //Método para obtener todas las Estadisticas
    getAllEstadistica(req, res) {
        try {
            let allEstadistica = estadisticaModels.all();
            response.succes(req, res, allEstadistica, 200)
        } catch (error) {
            response.error(req, res, null, 500)
        }
    }

    //Obtener una Estadistica
    getOneEstadistica(req, res) {
        let type = req.params.type
        let oneEstadistica = estadisticaModels.findByType(type);
        if(oneEstadistica){
            response.succes(req, res, oneEstadistica, 200)
        }
        else{
            let messageNOTFOUND = 'ERROR 404 Not Found'
            response.error(req, res, messageNOTFOUND, 404)
        }
    }

}