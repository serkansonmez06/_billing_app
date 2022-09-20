package com.sonmez.soccerOne.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sonmez.soccerOne.entity.Comment;
import com.sonmez.soccerOne.service.CommentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

	@Autowired
	private CommentService commentService;

	@PostMapping("/saveComment")
	public Comment addComment(@RequestBody Comment comment) {
		return commentService.saveComment(comment);
	}

	@GetMapping("/comments")
	public List<Comment> findAllComments() {
		return commentService.getComments();
	}

	@GetMapping("/comments/{id}")
	public Optional<Comment> findCommentById(@PathVariable int id) {
		return commentService.getComment(id);
	}

	@PutMapping("/updateComment") // update
	public Comment updateComment(@Valid @RequestBody Comment comment) {
		return commentService.updateComment(comment);
	}

	// Delete item by id
	@DeleteMapping("/comment/{id}")
	public ResponseEntity<Comment> deleteComment(@PathVariable int id) {
		return commentService.deleteComment(id);
	}

}
