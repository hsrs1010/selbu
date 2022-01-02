package com.selbu.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SelbuPatchDto {
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
}
