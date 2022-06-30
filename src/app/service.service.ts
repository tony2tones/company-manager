import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Office } from "./modals/office.modal";
import { User } from "./modals/staff.modal";
@Injectable({
    providedIn: 'root'
})
export class OfficeServices {

    constructor(private http: HttpClient) { }

    getOffices(): Observable<any> {
        return this.http.get('http://localHost:3000/api/offices');
    }

    getOfficeById(officeId: string): Observable<any> {
        return this.http.get(`http://localHost:3000/api/office/${officeId}`);
    }


    addOffice(newOffice: Office): Observable<any> {
        return this.http.post('http://localHost:3000/api/office', newOffice);

    }

    updateOffice(editOffice: Office, officeId: string): Observable<any> {
        return this.http.put(`http://localHost:3000/api/office/${officeId}`, editOffice);
    }

    updateOfficeUser(users: User[], officeId: string): Observable<any> {
        return this.http.put(`http://localHost:3000/api/office/${officeId}/user`, users);
    }

    deleteOffice(officeId: string): Observable<any> {
        return this.http.delete(`http://localHost:3000/api/office/${officeId}`);
    }

    // getUsers(): Observable<any> {
    //     return this.http.get('http://localHost:3000/api/users');
    // }
}