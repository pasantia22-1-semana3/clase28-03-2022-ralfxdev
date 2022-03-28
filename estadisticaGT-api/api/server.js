import express from "express";
import routerEstadistica from "./hechos-delictivos/routes/hechos-delictivos.route.js";

//Configuración del Server
export class Server {
    constructor(hostName, port, nameApp) {
        this._hostname = hostName;
        this._port = port;
        this._name = nameApp;
        this._app = express();
        this.initMiddlawares();
        this.initRoutes();
    }

    //Configuración Middlware
    initMiddlawares() {
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }));
    }


    //Configuración de las Rutas
    initRoutes() {
        this._app.use("/api/v1/estadisticagt", routerEstadistica)
        this._app.use("/api/v1/home", (req, res) => {
            res.json({ message: "Welcome to ESTADISTICAGT-API" })
        });
    }


    //Inicializa el servidor
    initServer() {
        try {
            this._app.set('trust proxy', this._hostname);
            this._app.listen(this._port, () => {
                console.log(`Server of ${this._app} running at http://${this._hostname}:${this._port}`)
            });
        } catch (error) {
            console.log(`Error al iniciar el servidor. -> Detalle:${error}`)
        }
    }
}