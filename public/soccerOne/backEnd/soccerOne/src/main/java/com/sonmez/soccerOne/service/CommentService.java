package com.sonmez.soccerOne.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sonmez.soccerOne.entity.Comment;
import com.sonmez.soccerOne.exception.ResourceNotFoundException;
import com.sonmez.soccerOne.repository.CommentRepository;

@Service
public class CommentService {

	@Autowired
	private CommentRepository commentRepository;

	public Comment saveComment(Comment comment) {
		return commentRepository.save(comment);
	}

	public List<Comment> getComments() {
		return commentRepository.findAll();
	}

	public Optional<Comment> getComment(int id) {
		Comment existingComment = commentRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("there is no id number to delete by id number: " + id));

		return commentRepository.findById(id);
	}

	public ResponseEntity<Comment> deleteComment(int id) {
		Comment existingComment = commentRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("there is no id number to delete by id number: " + id));

		commentRepository.delete(existingComment);
		return ResponseEntity.ok().build();
	}

	public Comment updateComment(Comment comment) {
		Comment existingComment = commentRepository.findById(comment.getId()).orElseThrow(
				() -> new ResourceNotFoundException("Cant update data for requested id number: " + comment.getId()));
		existingComment.setUsername(comment.getUsername());
		existingComment.setComment(comment.getComment());
		existingComment.setDate(comment.getDate());
		return commentRepository.save(existingComment);

	}
}
