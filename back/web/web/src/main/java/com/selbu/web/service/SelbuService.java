package com.selbu.web.service;

import java.util.List;

import javax.transaction.Transactional;

import com.selbu.web.entity.SelbuEntity;
import com.selbu.web.repo.SelbuRepository;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SelbuService {
    private final SelbuRepository selbuRepo;

    public List<SelbuEntity> selectBuildings() {
        return selbuRepo.findAll();
    }

    public SelbuEntity getBuilding(Long id) {
        return selbuRepo.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public SelbuEntity saveBuilding(SelbuEntity selbuEntity) {
        return selbuRepo.save(selbuEntity);
    }

        public void deleteBuilding(Long id){
            selbuRepo.deleteById(id);
    }

    public List<SelbuEntity> searchPlace(String place){
        return selbuRepo.findByPlaceContaining(place);
    }

    @Transactional
    public SelbuEntity updateBuilding(long id, SelbuEntity selbuEntity) {
        SelbuEntity selbudData = selbuRepo.findById(id).orElseThrow(IllegalArgumentException::new);
        selbudData.update(
                selbuEntity.getPlace_name(),
                selbuEntity.getPlace(),
                selbuEntity.getDetail_place(),
                selbuEntity.getNickname(),
                selbuEntity.getLessor_home_number(),
                selbuEntity.getLessor_phone_number(),
                selbuEntity.getUpjong(),
                selbuEntity.getDetail_upjong(),
                selbuEntity.getCall_date(),
                selbuEntity.getCall_content(),
                selbuEntity.getReceipt(),
                selbuEntity.getReceipt_date(),
                selbuEntity.getEntitlement(),
                selbuEntity.getDeposit(),
                selbuEntity.getMonth_price(),
                selbuEntity.getAcreage(),
                selbuEntity.getAdministrative_expenses(),
                selbuEntity.getOther_information(),
                selbuEntity.getStatus()
                );
        return selbudData;
    }

}

//@Service
//@RequiredArgsConstructor
//public class BoardService {
//    private final BoardRepository boardRepo;
//
//    public List<BoardEntity> selectBoard(){
//        return boardRepo .findAll();
//    }
//
//    public BoardEntity getBoard(Long syid){
//        return boardRepo.findById(syid).orElseThrow(IllegalArgumentException::new);
//    }
//
//    public List<BoardEntity> searchBoard(String title){
//        return boardRepo.findByTitleContaining(title);
//    }
//
//    public BoardEntity saveBoard(BoardEntity boardEntity){
//
//        return boardRepo.save(boardEntity);
//    }
//
//    public void deleteBoard(Long syid){
//
//        boardRepo.deleteById(syid);
//    }
//
//    @Transactional
//    public BoardEntity updateBoard(long syid, BoardEntity boardEntity){
//        BoardEntity boardData = boardRepo.findById(syid).orElseThrow(IllegalArgumentException::new);
//        boardData.update(boardEntity.getTitle(), boardEntity.getContent());
//        return boardData;
//    }
//}
