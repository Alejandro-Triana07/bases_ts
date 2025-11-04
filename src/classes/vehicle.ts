import { VehicleInfo } from "../interfaces/vehicleinfo";

export abstract class Vehicle {
  protected info: VehicleInfo;
  protected kilometers: number = 0;

  constructor(info: VehicleInfo) {
    this.info = info;
  }

  abstract start(): void;
  abstract stop(): void;

  drive(distance: number): void {
    this.kilometers += distance;
    console.log(
      `El ${this.info.marca} ${this.info.modelo} ha recorrido ${distance} km. Total: ${this.kilometers} km.`
    );
  }

  getInfo(): string {
    return `${this.info.marca} ${this.info.modelo} (${this.info.año}) - Combustible: ${this.info.tipoCombustible}`;
  }
}
