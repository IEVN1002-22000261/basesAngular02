import { Component } from '@angular/core';
import { CalculadoraResistencia } from './../resistencia2';

@Component({
  selector: 'app-resistencia-cal',
  standalone: false,
  templateUrl: './resistencia-cal.component.html',
  styleUrls: ['./resistencia-cal.component.css']
})
export class ResistenciaCalComponent {
  banda1: number = 0;
  banda2: number = 0;
  banda3: number = 0;
  tolerancia: number = 0;

  calculadora = new CalculadoraResistencia();
  mostrarResultados: boolean = false;

  coloresBanda: string[] = [
    "table-dark",
    "table-cafe",
    "table-rojo",
    "table-naranja",
    "table-amarillo",
    "table-verde",
    "table-azul",
    "table-morado",
    "table-gris",
    "table-blanco"
  ];

  multiplicadores: number[] = [
    1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000
  ];

  calcular(): void {
    this.calculadora.calcular(this.banda1, this.banda2, this.banda3, this.tolerancia);
    this.mostrarResultados = true;
  }

  getColorTolerancia(): string {
    return this.tolerancia === 0.05 ? 'table-dorado' : 'table-plata';
  }

  getTextoTolerancia(): string {
    return this.tolerancia === 0.05 ? 'Dorado 5%' : 'Plata 10%';
  }
}
