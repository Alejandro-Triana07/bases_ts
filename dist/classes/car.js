"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_1 = require("./vehicle");
class Car extends vehicle_1.Vehicle {
    start() {
        console.log(`El carro ${this.info.marca} ${this.info.modelo} ha sido encendido.`);
    }
    stop() {
        console.log(`El carro ${this.info.marca} ${this.info.modelo} se ha detenido.`);
    }
}
exports.Car = Car;
