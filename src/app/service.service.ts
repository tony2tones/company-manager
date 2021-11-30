import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class OfficeServices {

    constructor(private http: HttpClient) {}

    getOffices(): Observable<any> {
        return this.http.get('http://localHost:3000/api/offices');
    }

    addOffice(newOffice): Observable<any> {
        return this.http.post('http://localHost:3000/api/office', newOffice);

    }
}