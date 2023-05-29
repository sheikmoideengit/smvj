import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const hell="http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class SheikService {

  // constructor(private http:HttpClient){}

  // getdataa(){
  //   return this.http.get<any>(hell);
  // }


  // private sname: any;
  // private sage: any;

  // getdataname(){
  //   return this.sname;
  // }
  // getdataage(){
  //   return this.sage;
  // }

  // setdataname(aname: string): void{
  //   this.sname=aname;
  // }
  // setdataage(aage: number) : void{
  //   this.sage=aage;
  // }

  

}
