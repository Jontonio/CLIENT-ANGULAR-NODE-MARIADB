import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuarios';
import Swal from 'sweetalert2'
import { MenssageService } from './menssage.service';

@Injectable({
  providedIn: 'root'
})
export class ConectService {

  URL_BASE:string ='http://localhost:8000/';
  listaUsuarios: Usuario[] = [];

  constructor( private http: HttpClient, private message:MenssageService ) {}

  // listar todos los usuarios
  obtenerUsuarios(){
    
    this.http.get<Usuario[]>(`${this.URL_BASE}usuarios`).subscribe(
        res => { 
          this.listaUsuarios = res;  
        },
        error => { console.log(error) }
    )
  }
  
  // registrar a todos los usuarios 
  registrarUsuario(data:Usuario){
    return this.http.post(`${this.URL_BASE}usuarios`,data);
  }

  // obtener un usario por id
  getusuario(id:number){
    return this.http.get<Usuario>(`${this.URL_BASE}usuarios/${id}`);
  }

  // eliminar a un usuario
  eliminarUsuario(usuario:Usuario, pos:number){

    Swal.fire({
      title: '¿Estas seguro de eliminar al usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar usuario',
      cancelButtonText: 'No, gracias'
    }).then((result) => {

      if (result.isConfirmed) {

        this.http.delete(`${this.URL_BASE}usuarios/${usuario.id}`).subscribe(
            res => {
              this.message.mensaje('Usuario eliminado correctamente','success')
              this.listaUsuarios.splice(pos,1);
            },
            error =>{ 
              this.message.mensaje('Usuario eliminado correctamente','error')
              console.log(error) 
            })

      }

    })


  }

  // actualizar un usuario
  actualizarUsuario(data:any,id:number){
    return this.http.put(`${this.URL_BASE}usuarios/${id}`,data);
  }



}
