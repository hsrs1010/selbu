import { Component, OnInit } from '@angular/core';

import { SelbuResp } from '../selbuResp';
import { SelbuRespService } from '../selbuResp.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  selbuResp: SelbuResp[] = [];
  page = 0;
  constructor(
    private selbuRespService : SelbuRespService
    
  ) {}

  ngOnInit(): void {
    // this.test1()
    // this.getTotalPages()
    // this.getBuildingsPage()
  }

  test1():void{
    const test = this.selbuRespService.getBuildingsPageInfo()
    test.subscribe(data => console.log(data.totalPages))
  }

  // getPageable(): void{
  //   this.selbuRespService.getBuildingsPageInfo()
  //   .subscribe(selburesp => this.selbuResp = selburesp.pageable)
  // }

  getTotalPages():void{
    this.selbuRespService.getBuildingsTotalPages()
    .subscribe(selburesp => this.selbuResp = selburesp.totalPages)
  }

  getBuildingsPage(): void{
    this.selbuRespService.getBuildingsPage(this.page)
    .subscribe(selburesp => this.selbuResp = selburesp.content)
  }

  nextPage():void{
    this.page = this.page+1;
    this.getBuildingsPage()
    console.log('다음')
  }

  prevPage():void{
    this.page = this.page-1;
    this.getBuildingsPage()
  }

}
