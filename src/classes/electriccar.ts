import { Car } from "./car";
import { ElectricFeatures } from "../interfaces/electricfeatures";

export class ElectricCar extends Car implements ElectricFeatures {
  private batteryLevel: number = 50;

  chargeBattery(): void {
    this.batteryLevel = Math.min(this.batteryLevel + 25, 100);
    console.log(`Cargando batería, Nivel actual: ${this.batteryLevel}%`);
  }

  override start(): void {
    console.log(
      `El auto eléctrico ${this.info.marca} ${this.info.modelo} ha sido encendido con ${this.batteryLevel}% de batería.`
    );
  }
}
