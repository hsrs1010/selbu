import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Selbu } from '../selbu';
import { SelbuService } from '../selbu.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selbus!: Observable<Selbu[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private selbuService: SelbuService
  ) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  refreash(): void{
    setTimeout(function(){
      window.location.reload();
    },
    100);
  }

  ngOnInit(): void {
    this.selbus = this.searchTerms.pipe(
      // 연속된 키입력을 처리하기 위해 300ms 대기합니다.
      debounceTime(300),

      // 이전에 입력한 검색어와 같으면 무시합니다.
      distinctUntilChanged(),

      // 검색어가 변경되면 새로운 옵저버블을 생성합니다.
      switchMap((term: string) => this.selbuService.searchBuilding(term)),
    );
    
  }

}
