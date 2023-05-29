import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SheikService } from '../sheik.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  // sname:any;
  // sage:any;

  // constructor(private sheik : SheikService){

  // }

  // ngOnInit(){
  //   this.sname=this.sheik.getdataname();
  //   this.sage=this.sheik.getdataage();
  // }
  // @Input() countervalue:any;
  // // @Output() cvc: EventEmitter<number>=new EventEmitter();
  

  // increase(){
  //   this.countervalue++;
  //   // this.cvc.emit(this.countervalue);
  // }
  // decrease(){
  //   this.countervalue--;
  //   // this.cvc.emit(this.countervalue);
  // }

}
