import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any,args: any): any {
    // if(!value) return null;
    // if(!args) return value;
    //  return value.filter(function(user: any) {
    //   return user.toLowerCase().includes(args);
    // });
    
    if(!value) return null;
    if(!args) return value;
    args=args.toLowerCase();
    debugger;
    return value.filter(function(item: any) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
