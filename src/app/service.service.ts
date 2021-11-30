import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class OfficeServices {

    constructor(private http: HttpClient) {}

    getOffices() {
        return this.http.get('http://localHost:3000/api/offices');
    }
}