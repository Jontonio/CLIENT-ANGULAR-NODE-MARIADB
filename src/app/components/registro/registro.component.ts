import { ThisReceiver } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConectService } from 'src/app/services/conect.service';
import { MenssageService } from 'src/app/services/menssage.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formRegistro:FormGroup;
  id: number;
  update: boolean = false;

  constructor( 
    private ruta:Router,
    private frmbuilder:FormBuilder, 
    private dataService:ConectService,
    private message:MenssageService,
    private rutaActiva:ActivatedRoute
    ) { 

    this.crearFormulario();

    if(this.rutaActiva.snapshot.params.id){
      this.update = true;
      this.id = this.rutaActiva.snapshot.params.id
      this.formularioActualizar(this.id);
    } else {
      this.update = false;
    }

  }

  crearFormulario(){
    this.formRegistro = this.frmbuilder.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]]
    })
  }

  formularioActualizar(id:number){
    this.dataService.getusuario(id).subscribe(
      res => {
        this.formRegistro.controls['nombre'].setValue(res.nombre);
        this.formRegistro.controls['email'].setValue(res.email);
      },
      error =>{ console.log(error) }
    )
  }

  actualizar(){
    this.dataService.actualizarUsuario(this.formRegistro.value, this.id).subscribe(
      res => {
        this.formRegistro.reset();
        this.ruta.navigateByUrl('lista')
        this.message.mensaje('Usuario actualizado correctamente','success')
      },
      error =>{ console.log(error) }
    )
  }

  
  guardar(){

    if(this.formRegistro.invalid){
      Object.keys(this.formRegistro.controls).forEach(res =>{
        this.formRegistro.controls[res].markAsTouched()
      })
      return;
    }

    this.dataService.registrarUsuario(this.formRegistro.value).subscribe(
      (res) => { 
        this.message.mensaje('Usuario registrado correctamente','success')
        this.formRegistro.reset()
      },
      error => { 
        this.message.mensaje(error.error.msg,'error')
        console.log(error) 
      }
    )

  }

  cancelarUpdate(){
    this.formRegistro.reset();
    this.ruta.navigateByUrl('home')
  }

  get email(){
    return this.formRegistro.controls['email'];
  }

  get nombre(){
    return this.formRegistro.controls['nombre'];
  }


}
