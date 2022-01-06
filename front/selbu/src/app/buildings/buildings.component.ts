import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';

import { Selbu } from '../selbu';
import { SelbuService } from '../selbu.service';

import { SelbuResp } from '../selbuResp';
import { SelbuRespService } from '../selbuResp.service';

import { Pageable } from '../pageable';
import { PageableService } from '../pageableService';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  selbus: Selbu[] = [];
  selbuResp: SelbuResp[] = [];
  // pageable: Pageable | undefined;
  pageable: any;
  pageNumber: number | undefined;
  totalPage: number | undefined;
  totalPagesArr: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private selbuService: SelbuService,
    private selbuRespService : SelbuRespService,
    private pagealbeServiec: PageableService
  ) { }


  ngOnInit(): void {
    this.data()
    this.getBuildingsPagable()
    this.getBuildingsPage();
    this.getBuildingsTotalPage()
  }

  data():void{
    const page = parseInt(this.route.snapshot.paramMap.get('pageNumber')!,10);
    const test = this.selbuRespService.getBuildingsPage(page)
    test.subscribe(data => console.log(data))
  }
  
  getBuildings(): void{
    this.selbuService.getBuildings()
    .subscribe(selbus => this.selbus = selbus)
  }

  getBuildingsPage(): void{
    const page = parseInt(this.route.snapshot.paramMap.get('pageNumber')!,10);
    this.selbuRespService.getBuildingsPage(page)
    .subscribe(selburesp => this.selbuResp = selburesp.content)
  }

  getBuildingsPagable():void{
    const page = parseInt(this.route.snapshot.paramMap.get('pageNumber')!,10);
    this.pagealbeServiec.getBuildingsPage(page)
    .subscribe(pageable => this.pageable = pageable.pageable.pageNumber)
  }

  // getBuildingsTotalPage():void{
  //   this.selbuRespService.getBuildingsTotalPages()
  //   .subscribe(data => this.totalPage = data.totalPages)
  // }

  getBuildingsTotalPage():void {
    this.selbuRespService.getBuildingsTotalPages().subscribe((data) => {
      for(let i = 0; i < data.totalPages; i++){
        this.totalPagesArr.push(i);
      }
    })
  }

  refreash(): void{
    console.log(this.pageNumber)
    setTimeout(function(){
      window.location.reload();
    },
    10);
  }

}
