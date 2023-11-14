package com.backend.controllers;

import com.backend.models.Post;
import com.backend.services.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/")
    public List<Post> findAll(){
        List<Post> posts = postService.findAllPosts();
        for (Post post :
                posts) {
            System.out.println(post);
        }
        return posts;
    }

    @GetMapping("/{id}")
    public Post findPost(@PathVariable Long id){
        return postService.findPost(id);
    }
}
