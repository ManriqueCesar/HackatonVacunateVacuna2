export class Paciente {
    Data: string;
    avanceEtiqueta: string;

    constructor(obj: any) {
        this.Data = obj.Data;
        this.avanceEtiqueta = obj.avanceEtiqueta;
    }
}