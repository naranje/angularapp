import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  /**
   * Filter an array of generic types by searching through the values of properties defined 
   * in the props parameter.  
   * @param items Generic item array to filter
   * @param data filter string
   * @param props properties of the object that will be searched for matching strings
   */
  filter<T>(items: T[], data: string, props: string[]): any {
    return items.filter((item: T) => {
      let match = false;
      for (const prop of props) {
        // Check for nested properties (such as category.title)
        if (prop.indexOf('.') > -1) {
          const value = this.resolve(prop, item);
          if (value && value.toUpperCase().indexOf(data) > -1) {
            match = true;
            break;
          }
          continue;
        }

        if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
          match = true;
          break;
        }
      }
      return match;
    });
  }

  /**
   * Finds values inside a hierarchical object using a path (for example category.title)
   * @param path path to a nested property in the obj parameter
   * @param obj hierarchical object to traverse 
   */
  resolve(path: string, obj: any) {
    return path.split('.').reduce((prev, curr) => {
      return (prev ? prev[curr] : undefined);
    }, obj || self);
  }

}
