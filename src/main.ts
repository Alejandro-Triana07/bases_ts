import { FuelType } from "./enums/fueltype";
import { Car } from "./classes/car";
import { Truck } from "./classes/truck";
import { ElectricCar } from "./classes/electriccar";
import { simulateTrip } from "./utils/simulatetrip";

(async () => {
  console.log("Iniciando simulaciones");

  const car = new Car({
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    tipoCombustible: FuelType.Gasolina,
  });

  const truck = new Truck({
    marca: "Volvo",
    modelo: "FH16",
    año: 2021,
    tipoCombustible: FuelType.Diesel,
  });

  truck.loadCargo(1500);

  await simulateTrip(car, 80, 2000);
  await simulateTrip(truck, 120, 3000);

  const tesla = new ElectricCar({
    marca: "Tesla",
    modelo: "Model S",
    año: 2023,
    tipoCombustible: FuelType.Electrico,
  });

  tesla.chargeBattery();
  tesla.start();
  await simulateTrip(tesla, 150, 2500);
})();
