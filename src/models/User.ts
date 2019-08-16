import Coordinates from "../interfaces/Coordinates";
import faker from "faker";

export class User {
  public name: string;
  public location: Coordinates;

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  }
}
