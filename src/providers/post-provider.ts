import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
//npm install rxjs@6 rxjs-compat@6 --save

@Injectable()
export class PostProvider {
	server:string="http://localhost/IONICO/server_api/";

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