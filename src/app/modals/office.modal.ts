import { User } from "./user.modal";

export class Office {
    _id: string;
    companyName: string;
    phoneNumber: number;
    email: string;
    officeCapacity: number;
    address: string;
    users: User[];
    colourScheme: string;
}