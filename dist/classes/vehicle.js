"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(info) {
        this.kilometers = 0;
        this.info = info;
    }
    drive(distance) {
        this.kilometers += distance;
        console.log(`El ${this.info.marca} ${this.info.modelo} ha recorrido ${distance} km. Total: ${this.kilometers} km.`);
    }
    getInfo() {
        return `${this.info.marca} ${this.info.modelo} (${this.info.año}) - Combustible: ${this.info.tipoCombustible}`;
    }
}
exports.Vehicle = Vehicle;
