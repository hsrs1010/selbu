import { Component, OnInit } from '@angular/core';

import { Selbu } from '../selbu';
import { SelbuService } from '../selbu.service';

import { SelbuResp } from '../selbuResp';
import { SelbuRespService } from '../selbuResp.service';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  selbus: Selbu[] = [];
  selbuResp: SelbuResp[] = [];

  page = 0;
  constructor(
    private selbuService: SelbuService,
    private selbuRespService : SelbuRespService
  ) { }


  ngOnInit(): void {
    // this.getBuildings();
    // this.test1();
    // this.test2();
    // this.test3();
    this.getBuildingsPage();
  }

  test1():void{
    const test = this.selbuRespService.getBuildingsPage(this.page)
    test.subscribe(data => console.log(data.content))
  }

  test2():void{
    const test = this.selbuRespService.getBuildingsPage(this.page)
    test.subscribe(data => console.log(data))
  }

  test3():void{
    this.selbuService.getBuildings()
    .subscribe(data => console.log(data))
  }

  test4():void{
    const test = this.selbuRespService.getBuildingsPage(this.page)
    test.subscribe(data => console.log(data.content))
  }
  
  getBuildings(): void{
    this.selbuService.getBuildings()
    .subscribe(selbus => this.selbus = selbus)
  }

  getBuildingsPage(): void{
    this.selbuRespService.getBuildingsPage(this.page)
    .subscribe(selburesp => this.selbuResp = selburesp.content)
  }





}
