import Coordinates from "../interfaces/Coordinates";
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string, options?: google.maps.MapOptions) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementId),
      options
    );
  }

  addMarker(coordinates: Coordinates, label?: string) {
    const { lat, lng } = coordinates;
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng },
      label
    });

    return this;
  }
}
