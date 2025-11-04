import { FuelType } from "../enums/fueltype";

export interface VehicleInfo {
  marca: string;
  modelo: string;
  año: number;
  tipoCombustible: FuelType;
}
