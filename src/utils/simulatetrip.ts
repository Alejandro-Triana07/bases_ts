import { Vehicle } from "../classes/vehicle";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function simulateTrip(vehicle: Vehicle, distance: number, time: number): Promise<void> {
  console.log(`Iniciando recorrido con el ${vehicle.getInfo()}`);
  vehicle.start();

  await delay(time);

  vehicle.drive(distance);
  vehicle.stop();
  console.log(
    `El viaje con el ${vehicle.getInfo()} ha finalizado después de recorrer ${distance} km.\n`
  );
}
