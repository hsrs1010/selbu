package com.selbu.web.repo;

import com.selbu.web.entity.SelbuEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SelbuRepository extends JpaRepository<SelbuEntity, Long> {
    List<SelbuEntity> findByPlaceContaining(String place);
//    List<BoardEntity> findByTitleContains(String title);
//    List<BoardEntity> findByTitleIsContaining(String title);
//
    Page<SelbuEntity> findAll(Pageable pageable);
}
