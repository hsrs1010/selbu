import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 
import { Selbu } from '../selbu';
import { SelbuService } from '../selbu.service';


@Component({
  selector: 'app-buildings-post',
  templateUrl: './buildings-post.component.html',
  styleUrls: ['./buildings-post.component.css']
})
export class BuildingsPostComponent implements OnInit {
  selbu: Selbu[] = [];

  constructor(
    private selbuService: SelbuService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void{
    this.location.back()
  }

  add(
    place_name: string,
    place: string,
    detail_place: string,
    nickname: String,
    lessor_home_number: String,
    lessor_phone_number: String,
    upjong: String,
    detail_upjong: String,
    call_date: string,
    call_content: String,
    receipt: String,
    receipt_date: any,
    entitlement: string,
    deposit:string,
    month_price: string,
    acreage: string,
    administrative_expenses: string,
    other_information: string,
    status: string
    ): void{
      this.selbuService.addBuilding(
        {
          place_name, 
          place, 
          detail_place, 
          nickname, 
          lessor_home_number, 
          lessor_phone_number, 
          upjong, 
          detail_upjong, 
          call_date, 
          call_content, 
          receipt, 
          receipt_date, 
          entitlement,
          deposit,
          month_price,
          acreage,
          administrative_expenses,
          other_information,
          status
        } as Selbu
        ).subscribe(selbu => {
        this.selbu.push(selbu),
        this.goBack();
      })
    }

}
