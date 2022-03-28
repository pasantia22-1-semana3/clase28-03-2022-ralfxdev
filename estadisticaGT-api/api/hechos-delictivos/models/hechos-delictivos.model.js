//Modulo FS Leer y escribir archivos
import fs from "fs";

//Creación de la clase Estadistica
export class Estadistica {
    constructor(type, year, sexo, total) {
        this._type = type;
        this._year = year;
        this._sexo = sexo;
        this._total = total;
    }

    //get
    get type() {
        return this._type;
    }

    get year() {
        return this._year;
    }

    get sexo() {
        return this._sexo;
    }

    get total() {
        return this._total;
    }

    //set
    set type(type) {
        this._type = type;
    }

    set year(year) {
        this._year = year;
    }

    set sexo(sexo) {
        this._sexo = sexo;
    }

    set total(total) {
        this._total = total;
    }
}


//Modelo de la Estadistica
export class EstadisticaModels {
    constructor() {
        this._name = 'databases';
        this._dataDir = 'databases';
        this._dataPath = 'databases/cuadro-01.json';
    }

    //Método para leer el archivo JSON
    readJsonFile() {
        let contentFile = fs.readFileSync(this._dataPath, 'utf-8');
        if (contentFile) {
            return JSON.parse(contentFile)
        }
        return [];
    }

    //Método para devolver todas las Estadisticas
    all() {
        return this.readJsonFile();
    }

    //Método para identificar el Type
    findByType(type) {
        let items = this.readJsonFile();
        return items.find((item) => item._type == type)
    }
}