import { Vehicle } from "./vehicle";

export class Truck extends Vehicle {
  start(): void {
    console.log(`El camión ${this.info.marca} ${this.info.modelo} ha arrancado.`);
  }

  stop(): void {
    console.log(`El camión ${this.info.marca} ${this.info.modelo} se ha detenido.`);
  }

  loadCargo(weight: number): void {
    console.log(`El camión ${this.info.marca} ha cargado ${weight} kg de mercancía.`);
  }
}
