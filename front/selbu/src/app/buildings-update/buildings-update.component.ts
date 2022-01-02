import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { Selbu } from '../selbu';
import { SelbuService } from '../selbu.service';

@Component({
  selector: 'app-buildings-update',
  templateUrl: './buildings-update.component.html',
  styleUrls: ['./buildings-update.component.css']
})
export class BuildingsUpdateComponent implements OnInit {

  selbu: Selbu | undefined;
  constructor(
    private route: ActivatedRoute,
    private selbuService: SelbuService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getBuilding();
  }

  getBuilding(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.selbuService.getBuilding(id)
    .subscribe(selbu => this.selbu = selbu)
  }

  goBack(): void {
    this.location.back();
  }

  save(id:number): void {
    if (this.selbu) {
      this.selbuService.updateBuilding(this.selbu,id)
        .subscribe(() => this.goBack());
    }
    console.log(this.selbu?.status)
    console.log(this.selbu?.receipt)
    console.log(this.selbu?.receipt_date)
    console.log(this.selbu?.call_date)
  }

  getStatus(): void{
    (<HTMLInputElement>document.getElementById('status')).value;
    (<HTMLInputElement>document.getElementById('status-input')).value = (<HTMLInputElement>document.getElementById('status')).value;
    
    console.log('status : '+(<HTMLInputElement>document.getElementById('status')).value)
    console.log('status-input : '+(<HTMLInputElement>document.getElementById('status-input')).value)
  }

}
