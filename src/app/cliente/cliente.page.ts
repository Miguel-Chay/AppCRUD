import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  constructor(
    private router : Router

  ) { }

  ngOnInit() {
  }

  agregarCliente(){
    this.router.navigate(['/agregar-cliente']);
  }



}
