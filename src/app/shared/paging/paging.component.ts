import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  currentPage = 1;
  isVisible = true;
  previousEnabled = false;
  
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  previousNext(direction: number, event?: MouseEvent){
    let page: number = this.currentPage;
    if(direction === -1){
      if (page > 1){page--;}
    }else{
      page++;
    }
    this.changePage(page, event);
  }

  changePage(page: number, event: MouseEvent) {
    if(event){
      event.preventDefault();
    }
    if(this.currentPage===page){return;}
    this.currentPage = page;
    this.previousEnabled = this.currentPage > 1;
    this.pageChanged.emit(page);
  }

}
