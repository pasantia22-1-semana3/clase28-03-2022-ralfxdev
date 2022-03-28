import { Server } from "./server.js";
import { config } from "../config/default.js"

//Inicialización de las variables de entorno
function main(host, port, name) {
    const srv = new Server(host, port, name)
    srv.initServer();
}

main(config.api.host, config.api.port, config.api.app);