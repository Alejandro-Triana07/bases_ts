"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const vehicle_1 = require("./vehicle");
class Truck extends vehicle_1.Vehicle {
    start() {
        console.log(`El camión ${this.info.marca} ${this.info.modelo} ha arrancado.`);
    }
    stop() {
        console.log(`El camión ${this.info.marca} ${this.info.modelo} se ha detenido.`);
    }
    loadCargo(weight) {
        console.log(`El camión ${this.info.marca} ha cargado ${weight} kg de mercancía.`);
    }
}
exports.Truck = Truck;
