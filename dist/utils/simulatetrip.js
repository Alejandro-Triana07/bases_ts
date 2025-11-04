"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTrip = simulateTrip;
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function simulateTrip(vehicle, distance, time) {
    console.log(`Iniciando recorrido con el ${vehicle.getInfo()}`);
    vehicle.start();
    await delay(time);
    vehicle.drive(distance);
    vehicle.stop();
    console.log(`El viaje con el ${vehicle.getInfo()} ha finalizado después de recorrer ${distance} km.\n`);
}
