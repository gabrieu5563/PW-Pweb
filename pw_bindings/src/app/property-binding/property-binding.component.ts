import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  foto = "oioioi.jfif";
  foto2 = "steve.jpg";
  escondido: boolean = true;

  alertar(){
    alert("Hoje está muito calor, beba água!");
  }

  exibir(){
    this.escondido = !this.escondido;
  }
}
