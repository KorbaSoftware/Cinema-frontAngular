import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
	constructor(private httpClient: HttpClient) { }

	getAllUsers() {
		return this.http.get('http://localhost:8080/users');
	}
}
