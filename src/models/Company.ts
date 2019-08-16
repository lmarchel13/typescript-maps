import faker from "faker";
import Coordinates from "../interfaces/Coordinates";

export class Company {
  name: string;
  catchPhrase: string;
  location: Coordinates;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  }
}
