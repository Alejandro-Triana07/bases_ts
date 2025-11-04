"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricCar = void 0;
const car_1 = require("./car");
class ElectricCar extends car_1.Car {
    constructor() {
        super(...arguments);
        this.batteryLevel = 50;
    }
    chargeBattery() {
        this.batteryLevel = Math.min(this.batteryLevel + 25, 100);
        console.log(`Cargando batería, Nivel actual: ${this.batteryLevel}%`);
    }
    start() {
        console.log(`El auto eléctrico ${this.info.marca} ${this.info.modelo} ha sido encendido con ${this.batteryLevel}% de batería.`);
    }
}
exports.ElectricCar = ElectricCar;
