import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MenssageService {

  constructor() { }

  menssageOption(){

    Swal.fire({
      title: 'Estas seguro de eliminar al usuario?',
      text: "una vez eliminado el usuario!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

  mensaje(title:any,icon:any){
    Swal.fire({
      position: 'center',
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000
    })
  }

}
