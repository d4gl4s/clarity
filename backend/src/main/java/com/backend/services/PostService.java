package com.backend.services;

import com.backend.models.Post;
import com.backend.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> findAllPosts() {
        return postRepository.findAll();
    }

    public Post findPost(Long id) {
        return postRepository.findPostByIdWithOrderedBlocks(id);
    }
}
