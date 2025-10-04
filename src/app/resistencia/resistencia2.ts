export class CalculadoraResistencia {
  banda1: number = 0;
  banda2: number = 0;
  banda3: number = 0;
  tolerancia: number = 0;

  valor: number = 0;
  valorMax: number = 0;
  valorMin: number = 0;
  multiplicador: number = 1;

  private multiplicadores: number[] = [
    1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000
  ];

  public calcular(banda1: number, banda2: number, banda3: number, tolerancia: number): void {
  this.banda1 = banda1;
  this.banda2 = banda2;
  this.banda3 = banda3;
  this.tolerancia = tolerancia;

    this.multiplicador = this.multiplicadores[this.banda3];

    const base = (this.banda1 * 10 + this.banda2) * this.multiplicador;
    this.valor = base;
    this.valorMax = base * (1 + this.tolerancia);
    this.valorMin = base * (1 - this.tolerancia);
  }
}
