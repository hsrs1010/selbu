package com.selbu.web.dto;

import lombok.Data;

import java.util.Date;
@Data
public class SelbuPageDto {
    private Long id;
    private String place_name;
    private String place;
    private String detail_place;
    private String nickname;
    private String lessor_home_number;
    private String lessor_phone_number;
    private String upjong;
    private String detail_upjong;
    private Date call_date;
    private String call_content;
    private String receipt;
    private Date receipt_date;
    private Long entitlement;
    private Long deposit;
    private Long month_price;
    private Integer acreage;
    private Integer administrative_expenses;
    private String other_information;
    private String status;

    public SelbuPageDto(
            Long id,
            String place_name,
            String place,
            String detail_place,
            String nickname,
            String lessor_home_number,
            String lessor_phone_number,
            String upjong,
            String detail_upjong,
            Date call_date,
            String call_content,
            String receipt,
            Date receipt_date,
            Long entitlement,
            Long deposit,
            Long month_price,
            Integer acreage,
            Integer administrative_expenses,
            String other_information,
            String status
    ) {
        this.id = id;
        this.place_name = place_name;
        this.place = place;
        this.detail_place = detail_place;
        this.nickname = nickname;
        this.lessor_home_number = lessor_home_number;
        this.lessor_phone_number = lessor_phone_number;
        this.upjong = upjong;
        this.detail_upjong = detail_upjong;
        this.call_date = call_date;
        this.call_content = call_content;
        this.receipt = receipt;
        this.receipt_date = receipt_date;
        this.entitlement = entitlement;
        this.deposit = deposit;
        this.month_price = month_price;
        this.acreage = acreage;
        this.administrative_expenses = administrative_expenses;
        this.other_information = other_information;
        this.status = status;
    }
}
