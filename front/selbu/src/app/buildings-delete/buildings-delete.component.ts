import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Selbu } from '../selbu';
import { SelbuService } from '../selbu.service';
declare let kakao:any;	
@Component({
  selector: 'app-buildings-delete',
  templateUrl: './buildings-delete.component.html',
  styleUrls: ['./buildings-delete.component.css']
})
export class BuildingsDeleteComponent implements OnInit {
  selbu: Selbu | undefined;
  constructor(
    private route: ActivatedRoute,
    private selbuService: SelbuService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBuilding();
  }

  getBuilding(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.selbuService.getBuilding(id)
    .subscribe(selbu => this.selbu = selbu)
  }

  goBack(): void{
    this.location.back();
  }

  delete(selbu: Selbu): void{
    this.selbuService.deleteBuilding(selbu.id).subscribe();
    this.goBack();
  }



}
