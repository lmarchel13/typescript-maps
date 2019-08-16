import { User } from "./models/User";
import { Company } from "./models/Company";
import { CustomMap } from "./models/CustomMap";

const user = new User();
const company = new Company();

const map = new CustomMap("map", { zoom: 1, center: { lat: 0, lng: 0 } });

map
  .addMarker({ ...company.location }, "Company")
  .addMarker({ ...user.location }, "User");
