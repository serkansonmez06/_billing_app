package com.sonmez.soccerOne.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sonmez.soccerOne.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
