import { isNgContainer } from '@angular/compiler';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { SheikService } from './sheik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'mytrsession';

  // items: any;
  // constructor(private sheik: SheikService){

  // }
  
  // ngOnInit(): void{
  //   this.sheik.getdataa().subscribe((x: any) => {this.items=x});
  // }

  // data=[
  //   { name:"Sheik", id:"100", gender:"Male"},
  //   { name:"Sathya", id:"200", gender:"Male"},
  //   { name:"Sidd", id:"300", gender:"Male"},
  //   { name:"Suraj", id:"400", gender:"Male"},
  //   { name:"Logesh", id:"500", gender:"Male"},
  //   { name:"Harish", id:"600", gender:"Male"},
  //   { name:"Yuvi", id:"700", gender:"Male"},
  //   { name:"Dinesh", id:"800", gender:"Male"},
  //   { name:"Raj", id:"900", gender:"Male"},
  //   { name:"Arun", id:"1000", gender:"Male"},
    
  // ]
  // aname='sheik';
  // aage=20;

  //  constructor(private router: Router, private sheik:SheikService){

  //  }


  //  onclicked(){
  //    this.sheik.setdataname(this.aname);
  //    this.sheik.setdataage(this.aage);
  //    this.router.navigateByUrl('child1');

  // }
  
  // count =0;

  // @ViewChild(Child1Component,{ static : true }) child1Comp:any;

  // update(countervalue:any){
  //   this.count=countervalue;
  

  // increase(){
  //   this.count++;
  // }
  // decrease(){
  //   this.count--;
  // }
  // username: any;
  // users=[
  //   'sheik',
  //   'sathya',
  //   'siddharth',
  //   'suraj',
  //   'srikkanth'
  // ];

  itemname: any;
  items=[
    {course:"BCA", fees:"40000", type:"COMPUTER APPLICATIONS"},
    {course:"BCOM", fees:"40800", type:"COMMERCE"},
    {course:"BSC", fees:"45000", type:"COMPUTER SCIENCE"}
  ]

  // a= 0;
  // b=false;
  // increase(){
  //   this.a++;
  // }
  // d='';
  // fc1='abc';
  // fc2='cba';
  // users=[
  //   {empname:"sheik" , empid: 1},
  //   {empname:"sathya" , empid: 2},
  //   {empname:"siddharth" , empid: 3}
  // ];
  // today=new Date();
  // myname="Sheik";
  // mynum= 12345.6780;
  // myper=this.mynum;
  // mycur=4500.60;
  }

