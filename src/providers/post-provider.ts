import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
//npm install rxjs@6 rxjs-compat@6 --save

@Injectable()
export class PostProvider {

	//server:string="http://localhost:8100/IONICO/server_api/";
	server:string="http://localhost/CRUD/server_api/";
	//http://localhost/CRUD/server_api/
	//proses-api.php
	constructor(public http : Http){

	}

	postData(body, file){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({'Content-Type': type});
		let options = new RequestOptions ({headers: headers});

		return this.http.post(this.server + file, JSON.stringify(body),options)
		.map(res => res.json());
	}
}