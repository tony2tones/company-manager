import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./modals/staff.modal";
@Injectable({
    providedIn: 'root'
})
export class UserServices {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        console.log('test click ');
        return this.http.get('http://localHost:3000/api/users');
    }

    getUserById(userId: string): Observable<any> {
        return this.http.get(`http://localHost:3000/api/user/${userId}`);
    }


    addUser(newuser): Observable<any> {
        return this.http.post('http://localHost:3000/api/user', newuser);

    }

    updateUser(edituser: User, userId: string): Observable<any> {
        return this.http.put(`http://localHost:3000/api/user/${userId}`, edituser);

    }

    deleteUser(userId: string): Observable<any> {
        return this.http.delete(`http://localHost:3000/api/user/${userId}`);

    }
}