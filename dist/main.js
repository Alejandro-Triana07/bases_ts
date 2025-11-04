"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fueltype_1 = require("./enums/fueltype");
const car_1 = require("./classes/car");
const truck_1 = require("./classes/truck");
const electriccar_1 = require("./classes/electriccar");
const simulatetrip_1 = require("./utils/simulatetrip");
(async () => {
    console.log("Iniciando simulaciones");
    const car = new car_1.Car({
        marca: "Toyota",
        modelo: "Corolla",
        año: 2022,
        tipoCombustible: fueltype_1.FuelType.Gasolina,
    });
    const truck = new truck_1.Truck({
        marca: "Volvo",
        modelo: "FH16",
        año: 2021,
        tipoCombustible: fueltype_1.FuelType.Diesel,
    });
    truck.loadCargo(1500);
    await (0, simulatetrip_1.simulateTrip)(car, 80, 2000);
    await (0, simulatetrip_1.simulateTrip)(truck, 120, 3000);
    const tesla = new electriccar_1.ElectricCar({
        marca: "Tesla",
        modelo: "Model S",
        año: 2023,
        tipoCombustible: fueltype_1.FuelType.Electrico,
    });
    tesla.chargeBattery();
    tesla.start();
    await (0, simulatetrip_1.simulateTrip)(tesla, 150, 2500);
})();
