package com.selbu.web.entity;

import javax.persistence.*;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import java.util.Date;

@Data
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor
//@AllArgsConstructor
@Entity
@Table(name = "test")
@Getter
@DynamicUpdate
public class SelbuEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String place_name;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String place;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String detail_place;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String nickname;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String lessor_home_number;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String lessor_phone_number;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String upjong;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String detail_upjong;

    @Column(nullable = false)
//    @NotNull
    private Date call_date;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String call_content;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String receipt;

    @Column(nullable = false)
//    @NotNull
    private Date receipt_date;

    @Column(nullable = false, length = 20)
//    @NotNull
    private Long entitlement;

    @Column(nullable = false, length = 20)
//    @NotNull
    private Long deposit;

    @Column(nullable = false, length = 20)
//    @NotNull
    private Long month_price;

    @Column(nullable = false)
//    @NotNull
    private Integer acreage;

    @Column(nullable = false)
//    @NotNull
    private Integer administrative_expenses;

    @Column(nullable = false, length = 50)
//    @NotNull
    private String other_information;

    @Column(nullable = false, length = 50)
    private String status;

    public void update(
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

    @Builder
    public SelbuEntity(
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

