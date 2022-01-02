package com.selbu.web.controller;

import java.util.List;

import com.selbu.web.dto.SelbuPatchDto;
import com.selbu.web.dto.SelbuPostDto;
import com.selbu.web.dto.SelbuPutDto;
import com.selbu.web.entity.SelbuEntity;
import com.selbu.web.repo.SelbuRepository;
import com.selbu.web.service.SelbuService;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping("/selbu")
public class SelbuController {
    private final SelbuService selbuService;

    @GetMapping
    public List<SelbuEntity> selectBuildings() {
        return selbuService.selectBuildings();
    }

    @GetMapping("/{id}")
    public SelbuEntity getBuilding(@PathVariable Long id) {
        return selbuService.getBuilding(id);
    }

    @GetMapping("/search/{place}")
    public List<SelbuEntity> searchPlace(@PathVariable String place){
        return selbuService.searchPlace(place);
    }

    @PostMapping
    public SelbuEntity saveBuilding(@RequestBody SelbuPostDto selbuPostDto) {
        SelbuEntity SelbuEntity = new SelbuEntity();
        SelbuEntity params = SelbuEntity.builder()
                .place_name(selbuPostDto.getPlace_name())
                .place(selbuPostDto.getPlace())
                .detail_place(selbuPostDto.getDetail_place())
                .nickname(selbuPostDto.getNickname())
                .lessor_home_number(selbuPostDto.getLessor_home_number())
                .lessor_phone_number(selbuPostDto.getLessor_phone_number())
                .upjong(selbuPostDto.getUpjong())
                .detail_upjong(selbuPostDto.getDetail_upjong())
                .call_date(selbuPostDto.getCall_date())
                .call_content(selbuPostDto.getCall_content())
                .receipt(selbuPostDto.getReceipt())
                .receipt_date(selbuPostDto.getReceipt_date())
                .entitlement(selbuPostDto.getEntitlement())
                .deposit(selbuPostDto.getDeposit())
                .month_price(selbuPostDto.getMonth_price())
                .acreage(selbuPostDto.getAcreage())
                .administrative_expenses(selbuPostDto.getAdministrative_expenses())
                .other_information(selbuPostDto.getOther_information())
                .status(selbuPostDto.getStatus())
                .build();
        return selbuService.saveBuilding((params));
    }

    @DeleteMapping("/{id}")
    public void deleteBuilding(@PathVariable Long id) {
        selbuService.deleteBuilding(id);
    }

    @PutMapping("/{id}")
    public SelbuEntity updateBuilding(@PathVariable Long id, @RequestBody SelbuPutDto selbuPutDto) {
        SelbuEntity selbuEntity = new SelbuEntity();
        SelbuEntity params = selbuEntity.builder()
                .place_name(selbuPutDto.getPlace_name())
                .place(selbuPutDto.getPlace())
                .detail_place(selbuPutDto.getDetail_place())
                .nickname(selbuPutDto.getNickname())
                .lessor_home_number(selbuPutDto.getLessor_home_number())
                .lessor_phone_number(selbuPutDto.getLessor_phone_number())
                .upjong(selbuPutDto.getUpjong())
                .detail_upjong(selbuPutDto.getDetail_upjong())
                .call_date(selbuPutDto.getCall_date())
                .call_content(selbuPutDto.getCall_content())
                .receipt(selbuPutDto.getReceipt())
                .receipt_date(selbuPutDto.getReceipt_date())
                .entitlement(selbuPutDto.getEntitlement())
                .deposit(selbuPutDto.getDeposit())
                .month_price(selbuPutDto.getMonth_price())
                .acreage(selbuPutDto.getAcreage())
                .administrative_expenses(selbuPutDto.getAdministrative_expenses())
                .other_information(selbuPutDto.getOther_information())
                .status(selbuPutDto.getStatus())
                .build();
        return selbuService.updateBuilding(id, params);
    }
}

//@RestController
//@CrossOrigin(origins = "*")
////@CrossOrigin(origins = "http://localhost:4200")
//@RequiredArgsConstructor
//@RequestMapping("/board")
//public class BoardController {
//    private final BoardService boardService;
//
//    @GetMapping
//    public List<BoardEntity> selectBoards(){
//        return boardService.selectBoard();
//    }
//
//    @GetMapping("/{syid}")
//    public BoardEntity getBoard(@PathVariable Long syid){
//        return boardService.getBoard(syid);
//    }
//
//    @GetMapping("test/{syid}")
//    @ResponseBody
//    public BoardEntity test(@PathVariable Long syid){
//        BoardEntity boardEntity = new BoardEntity();
//        boardEntity.setSyid(syid);
//
//        return boardEntity;
//    }
//
//
//    @GetMapping("/search/{title}")
//    public List<BoardEntity> searchBoard(@PathVariable String title){
//        return boardService.searchBoard(title);
//    }
//
//    @PostMapping
//    public BoardEntity saveBoard(@RequestBody BoardPostDto boardPostDto){
//        BoardEntity boardEntity = new BoardEntity();
//        BoardEntity params = boardEntity.builder()
//                .title(boardPostDto.getTitle())
//                .writer(boardPostDto.getWriter())
//                .content(boardPostDto.getContent())
//                .boardpassword(boardPostDto.getBoardpassword())
//                .build();
//        return boardService.saveBoard((params));
//    }
//
//    @PutMapping("/{syid}")
//    public BoardEntity updateBoard(@PathVariable Long syid, @RequestBody BoardPutDto boardPutDto){
//        BoardEntity boardEntity = new BoardEntity();
//        BoardEntity params = boardEntity.builder()
//                .content(boardPutDto.getContent())
//                .title(boardPutDto.getTitle())
//                .build();
//        return boardService.updateBoard(syid, params);
//    }
//
//    @DeleteMapping("/{syid}")
//    @ResponseStatus(HttpStatus.OK)
//    public void deleteBoard(@PathVariable Long syid){
//
//        boardService.deleteBoard(syid);
//    }
//}