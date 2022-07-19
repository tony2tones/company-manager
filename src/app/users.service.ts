import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./modals/user.modal";
@Injectable({
    providedIn: 'root'
})
export class UserServices {

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<any> {
        return this.http.get('http://localHost:3000/api/users');
    }

    public getUserById(userId: string): Observable<any> {
        return this.http.get(`http://localHost:3000/api/user/${userId}`);
    }

    public addUser(newuser:User): Observable<any> {
        return this.http.post('http://localHost:3000/api/addUser', newuser);
    }

    public updateUser(edituser: User, userId: string): Observable<any> {
        return this.http.put(`http://localHost:3000/api/user/${userId}`, edituser);

    }

    public deleteUser(userId: string): Observable<any> {
        return this.http.delete(`http://localHost:3000/api/user/${userId}`);

    }
}