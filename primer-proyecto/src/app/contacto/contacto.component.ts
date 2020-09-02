import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Contacto } from '../modelos/Contacto'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() contacto: Contacto;
  @HostBinding('attr.class') cssClass= "col-md-3";

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  

}
