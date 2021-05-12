import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent{

  constructor( public dataService: ConectService ) { 
      this.dataService.obtenerUsuarios();
  }

  eliminar(usuario:Usuario, pos:number){
    this.dataService.eliminarUsuario(usuario, pos);
  }

  

}
