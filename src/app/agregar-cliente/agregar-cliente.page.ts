import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';



@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.page.html',
  styleUrls: ['./agregar-cliente.page.scss'],
})
export class AgregarClientePage implements OnInit {

  nombre_cliente     : string="";	
  descripcion_cliente: string="";

  constructor(
    private postPvdr: PostProvider,
    private router : Router

    ) { }

  ngOnInit() { 
  }

  createdProses(){
  	return new Promise(resolve =>{
      let body={
        aksi : 'add',
        nombre_cliente :this.nombre_cliente,
        descripcion_cliente :this.descripcion_cliente
      }

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data =>{
        this.router.navigate(['/cliente']);
        console.log("OK")
      })

    })
  }
}
