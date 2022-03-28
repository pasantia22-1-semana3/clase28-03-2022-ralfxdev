import dotenv from "dotenv"

const env = dotenv.config();

//Configuración por defecto del server
export const config = {
    api: {
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 5050,
        app: process.env.APP || 'estadisticaGT-api'
    }
}