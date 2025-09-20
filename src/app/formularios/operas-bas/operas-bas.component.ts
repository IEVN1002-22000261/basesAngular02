import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string="";
  num2:string="";
  res:string="";
  operacion:string="";


  sumar():void{
    this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
  }
  resta():void{
    this.res=(parseInt(this.num1)-parseInt(this.num2)).toString();
  }
  multiplicacion():void{
    this.res=(parseInt(this.num1)*parseInt(this.num2)).toString();
  }
  division():void{
    this.res=(parseInt(this.num1)/parseInt(this.num2)).toString();
  }
  resolver():void{
    if (this.operacion=="sumar"){
      this.sumar();
    }else if(this.operacion=="resta"){
        this.resta();
    }else if(this.operacion=="multiplicacion"){
      this.multiplicacion();
    }else{
      this.division();
    }
  }

}
