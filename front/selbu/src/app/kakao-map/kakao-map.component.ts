import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Selbu } from '../selbu';
import { SelbuService } from '../selbu.service';

declare let kakao:any;	
@Component({
  selector: 'app-kakao-map',
  templateUrl: './kakao-map.component.html',
  styleUrls: ['./kakao-map.component.css']
})
export class KakaoMapComponent implements OnInit {
  selbu: Selbu | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private selbuService: SelbuService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // kakao.init('e21d0443f0263295ddeffd827c919432');
    this.getBuilding();
  }
  getBuilding(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.selbuService.getBuilding(id)
    .subscribe(selbu => this.selbu = selbu)
  }

  serchPlace(place:string): void{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(place, function(result:any, status:any) {

  // 정상적으로 검색이 완료됐으면 
   if (status === kakao.maps.services.Status.OK) {
     console.log("정상")
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시합니다
      var marker = new kakao.maps.Marker({
          map: map,
          position: coords
      });

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:350px;text-align:center;padding:6px 0;">'+
          place+'</br>'+
          '</div></hr>'
      });
      infowindow.open(map, marker);

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
  } 
});  
  }
}
