import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nombre:string="";
  compradores:string="";
  cantidad:string="";
  tarjeta:string="";
  precioB:number=12;
  total:string="";
  maximo:string="";

  compradoresB():void{
    let max = parseInt(this.compradores) * 7;
    this.maximo = max.toString();
  }

  descuentos():void{
    this.compradoresB();

    if (parseInt(this.cantidad) > parseInt(this.maximo)){
      alert("Solo se puede comprar un máximo de 7 boletos por persona.");
      return;
    }

    let subtotal = parseInt(this.cantidad) * this.precioB;

    if(parseInt(this.cantidad) > 5){

      this.total=((subtotal)-(subtotal*.15)).toString();

    }else if(parseInt(this.cantidad) >= 3 && parseInt(this.cantidad) <= 5){

      this.total=((subtotal)-(subtotal*.10)).toString();

    }else if(parseInt(this.cantidad) > 0 && parseInt(this.cantidad) <= 2){

      this.total=(subtotal).toString();
    }
  }

  tarjetaCinepo():void{
    this.descuentos();

    if(this.tarjeta == "true"){
      this.total=(parseFloat(this.total)-(parseFloat(this.total)*.10)).toString();
    }else if(this.tarjeta == "false"){
      this.total.toString();
    }
  }
}

