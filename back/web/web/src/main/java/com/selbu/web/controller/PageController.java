package com.selbu.web.controller;

import com.selbu.web.dto.SelbuPageDto;
import com.selbu.web.entity.SelbuEntity;
import com.selbu.web.repo.SelbuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PageController {
    @Autowired
    SelbuRepository selbuRepository;

    @GetMapping("/page")
    public Page<SelbuPageDto> paging(@PageableDefault(size = 5, sort = "id") Pageable pageRequest){
        Page<SelbuEntity> postList = selbuRepository.findAll(pageRequest);

        Page<SelbuPageDto> pagingList = postList.map(
                post -> new SelbuPageDto(
                        post.getId(),
                        post.getPlace_name(),
                        post.getPlace(),
                        post.getDetail_place(),
                        post.getNickname(),
                        post.getLessor_home_number(),
                        post.getLessor_phone_number(),
                        post.getUpjong(),
                        post.getDetail_upjong(),
                        post.getCall_date(),
                        post.getCall_content(),
                        post.getReceipt(),
                        post.getReceipt_date(),
                        post.getEntitlement(),
                        post.getDeposit(),
                        post.getMonth_price(),
                        post.getAcreage(),
                        post.getAdministrative_expenses(),
                        post.getOther_information(),
                        post.getStatus()
                )
        );
        return pagingList;
    }
}
