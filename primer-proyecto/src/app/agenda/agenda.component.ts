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

  agregarContacto (nom:string, tel) {
    if(nom !== '' && tel !==''){
      let contacto = new Contacto(nom, tel);
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

    setTimeout(() => {
      error.classList.add('d-none');
    }, 4000);
  }

  
}
