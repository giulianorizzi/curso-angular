import { Component, OnInit } from '@angular/core';
import { Contacto } from '../modelos/Contacto'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  contactos: Contacto[];

  constructor() {
    this.contactos = [];
  }

  ngOnInit(): void {
  }

  agregarContacto (nom:string, tel, dir:string) {
    if(nom !== '' && tel !=='' && dir !== ''){
      let contacto = new Contacto(nom, tel, dir);
      this.contactos.push(contacto);
      this.mostrarMensaje('ok','Contacto agregado!');
    } else {
      this.mostrarMensaje('error','Completa todos los campos!');
    }
    
    return false;
  }

  mostrarMensaje(tipo:string, texto:string){
    let error = document.querySelector('.error');
    if(tipo === 'error'){
      error.classList.remove('alert-success');
      error.classList.add('alert', 'alert-danger');
    }
    else{
      error.classList.remove('alert-danger');
      error.classList.add('alert', 'alert-success');
    }
    error.classList.remove('d-none');
    error.setAttribute('role', 'alert');
    error.textContent = texto;
  }

  
}
