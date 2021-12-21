import { User } from "./staff.modal";

export class Office {
    _id: string;
    companyName: string;
    phoneNumber: number;
    email: string;
    officeCapacity: number;
    address: string;
    staff: User[];
    colourScheme: string;
}