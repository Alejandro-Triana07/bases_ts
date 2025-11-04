import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
  start(): void {
    console.log(`El carro ${this.info.marca} ${this.info.modelo} ha sido encendido.`);
  }

  stop(): void {
    console.log(`El carro ${this.info.marca} ${this.info.modelo} se ha detenido.`);
  }
}
